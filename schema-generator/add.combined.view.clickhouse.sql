DROP TABLE IF EXISTS combined_data_v1;
DROP TABLE IF EXISTS mic_tap_view_v1;
DROP TABLE IF EXISTS combined_data;
DROP TABLE IF EXISTS mic_tap_view;
DROP TABLE IF EXISTS feedback_view;

SET allow_experimental_refreshable_materialized_view = 1;


CREATE MATERIALIZED VIEW IF NOT EXISTS combined_data_v1 
REFRESH EVERY 30 SECONDS 
ENGINE = MergeTree
ORDER BY e_timestamp 
SETTINGS allow_nullable_key = 1 AS

select 
	part_1.* EXCEPT(reactionText, reactionType),
	case when part_2.reactionText is null THEN part_1.reactionText ELSE part_2.reactionText END as reactionText,
	case when part_2.reactionType is null THEN part_1.reactionType ELSE part_2.reactionType END as reactionType
FROM
(SELECT
    messageId,
    maxIf(timeTaken, event = 'E002') AS spellCheckLatency,
    maxIf(timestamp, eventId = 'E005') AS e_timestamp,
    maxIf(userId, eventId = 'E032') AS userId,
    maxIf(orgId, eventId = 'E032') AS orgId,
    maxIf(botId, eventId = 'E032') AS botId,
    maxIf(sessionId, eventId = 'E032') as sessionId,
    maxIf(audioFileName, eventId = 'E002') as s2tInput,
    maxIf(conversationId, eventId = 'E032') AS conversationId,
    maxIf(text, eventId = 'E032') AS query,
    maxIf(text, eventId = 'E007' AND timeTaken > 0) AS translatedQuery,
    maxIf(text, eventId = 'E002') AS s2tOutput,
    (CASE WHEN query IS NOT NULL AND s2tOutput IS NOT NULL AND query != s2tOutput THEN true ELSE false END) AS isQueryEdited,
    maxIf(spellCorrectedText, eventId = 'E002') AS spellCorrectedText,
    maxIf(timestamp, eventId = 'E005') AS responseAt,
    maxIf(translatedResponse, eventId = 'E012' AND timeTaken > 0) AS translatedResponse,
    maxIf(text, eventId = 'E008' AND timeTaken > 0 ) AS coreferencedText,
    maxIf(queryClass, eventId = 'E009' AND timeTaken > 0) AS queryClass,
    maxIf(NER, eventId = 'E011' AND timeTaken > 0) AS NER,
    maxIf(text, eventId = 'E012' AND timeTaken > 0) AS response,
    groupArray(tuple(eventId, subEvent, error)) AS error,
    COUNTIf(eventId = 'E015') AS timesAudioUsed,
    maxIf(phoneNumber, eventId = 'E032') AS phoneNumber,
    maxIf(district, eventId = 'E006') AS district,
    maxIf(block, eventId = 'E006') AS block,
    maxIf(reactionType, eventId = 'E023') AS reactionType,
    maxIf(reactionText, eventId = 'E023') AS reactionText,
    maxIf(streamStartLatency, eventId = 'E012') as streamStartLatency,
    maxIf(timeTaken, eventId = 'E005' AND timeTaken > 0) AS getUserHistoryLatency,
    maxIf(timeTaken, eventId = 'E008' AND timeTaken > 0) AS getNeuralCoreferenceLatency,
    maxIf(timeTaken, eventId = 'E009' AND timeTaken > 0) AS classifyQuestionLatency,
    maxIf(timeTaken, eventId = 'E010' AND timeTaken > 0) AS getSimilarDocsLatency,
    maxIf(timeTaken, eventId = 'E012' AND timeTaken > 0) AS getResponseLatency,
    maxIf(timeTaken, eventId = 'E011' AND timeTaken > 0) AS NERLatency,
    maxIf(timeTaken, eventId = 'E014' AND timeTaken > 0) AS T2SLatency,
    maxIf(timeTaken, eventId = 'E002') AS S2TLatency,
    maxIf(language, eventId = 'E047') AS detectedLanguage,
    maxIf(timeTaken, eventId = 'E047') AS detectedLatency,
    maxIf(timeTaken, eventId = 'E007' AND timeTaken > 0) AS translateInputLatency,
    COALESCE(spellCheckLatency, 0) +
    COALESCE(getUserHistoryLatency, 0) +
    COALESCE(getNeuralCoreferenceLatency, 0) +
    COALESCE(classifyQuestionLatency, 0) +
    COALESCE(getSimilarDocsLatency, 0) +
    COALESCE(getResponseLatency, 0) +
    COALESCE(NERLatency, 0) +
    COALESCE(T2SLatency, 0) +
    COALESCE(S2TLatency, 0) +
    COALESCE(detectedLatency, 0) +
    COALESCE(translateInputLatency, 0) AS totalLatency,
    maxIf(similarChunks, eventId = 'E010') AS similarChunks,
    maxIf(prompt, eventId = 'E012' AND timeTaken > 0) AS prompt,
    maxIf(responseType, eventId = 'E012' AND timeTaken > 0) AS responseType,
    maxIf(isGuided, eventId = 'E012' AND timeTaken > 0) AS isGuided,
    maxIf(isFlowEnd, eventId = 'E012' AND timeTaken > 0) AS isFlowEnd
FROM
    event
where messageId is not null
GROUP BY
    messageId) as part_1
Left JOIN -- get the feedback information
(
    SELECT
        toUUID(max(e1.replyId)) as messageId, max(e2.reactionText) as reactionText, max(e2.reactionType) as reactionType
    FROM event as e1
    JOIN event as e2
    on e1.messageId = e2.messageId
    WHERE e1.eventId = 'E033' and e2.eventId = 'E023' AND e1.replyId IS NOT NULL
    group by e1.messageId
) as part_2
on part_1.messageId = part_2.messageId;

CREATE MATERIALIZED VIEW IF NOT EXISTS mic_tap_view
REFRESH EVERY 30 SECONDS 
ENGINE = MergeTree
ORDER BY sessionId 
SETTINGS allow_nullable_key = 1 AS
SELECT
    sessionId,
    timestamp,
    COUNTIf(eventId = 'E044') AS count,
    maxIf(orgId, eventId = 'E032') AS orgId,
    maxIf(botId, eventId = 'E032') AS botId
FROM
    (select sessionId, Date(timestamp) as timestamp, eventId, orgId, botId from event) as intermediate
WHERE sessionId IS NOT NULL
GROUP BY
    sessionId, timestamp;