CREATE TABLE IF NOT EXISTS event
(
	generator String,
	version String,
	timestamp DateTime,
	actorId String,
	actorType String,
	sessionId Nullable(String),
	deviceId Nullable(String),
	env String,
	eventId String,
	event String,
	subEvent Nullable(String),
	timeElapsed Nullable(UInt32),
	os Nullable(String),
	browser Nullable(String),
	browserVersion Nullable(String),
	deviceType Nullable(String),
	platform Nullable(String),
	ip String,
	botId Nullable(UUID),
	userId Nullable(UUID),
	orgId Nullable(UUID),
	conversationId Nullable(UUID),
	messageId Nullable(UUID),
	audioFileName Nullable(String),
	audioUrl Nullable(String),
	audioId Nullable(UUID),
	text Nullable(String),
	mediaIds Nullable(String),
	spellCorrectedText Nullable(String),
	error Nullable(String),
	timeTaken Nullable(UInt32),
	spellCheckTimeTaken Nullable(UInt32),
	phoneNumber Nullable(String),
	createdAt Nullable(DateTime),
	queryId Nullable(UUID),
	did Nullable(String),
	userManagementUrl Nullable(String),
	textInEnglish Nullable(String),
	coreferencedText Nullable(String),
	block Nullable(String),
	district Nullable(String),
	queryClass Nullable(String),
	NER Nullable(String),
	similarChunks Nullable(String),
	responseInEnglish Nullable(String),
	response Nullable(String),
	feedback Nullable(String),
	reaction Nullable(UInt32),
	timesAudioUsed Nullable(UInt32),
	outputText Nullable(String),
	errorRate Nullable(UInt32),
	schemaId Nullable(UUID),
	datasetId Nullable(UUID),
	question Nullable(String),
	field Nullable(String),
	threshold Nullable(UInt32),
	sqlQuery Nullable(String),
	result Nullable(String),
	documentId Nullable(String),
	requestId Nullable(UUID),
	eventLog Nullable(String),
	transformerId Nullable(String),
	language Nullable(String),
	prompt Nullable(String),
	translatedResponse Nullable(String),
	streamStartLatency Nullable(UInt32),
	reactionType Nullable(String),
	reactionText Nullable(String),
	userHistory Nullable(String),
	replyId Nullable(String),
	responseType Nullable(String),
	isGuided Nullable(String),
	isFlowEnd Nullable(String)
)
ENGINE = MergeTree
ORDER BY timestamp;
