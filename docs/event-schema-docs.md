# Event Data
These are auto-generated schema specification through CSV
## speechToText
### receivedAudio
When is it generated: BFF received audio from a bot
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "audioUrl": {
            "type": "string",
            "format": "url"
        },
        "audioId": {
            "type": "string",
            "format": "uuid"
        },
        "createdAt": {
            "type": "number"
        },
        "language": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId"
    ],
    "description": "BFF received audio from a bot"
}
```
### speechToTextResponse
When is it generated: Audio is converted to text from audio
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "audioFileName": {
            "type": "string"
        },
        "audioUrl": {
            "type": "string",
            "format": "url"
        },
        "audioId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "spellCorrectedText": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "spellCheckTimeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "language": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "timeTaken"
    ],
    "description": "Audio is converted to text from audio"
}
```
### mapQueryIdToAudio
When is it generated: AudioId is mapped to QueryId
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "audioUrl": {
            "type": "string",
            "format": "url"
        },
        "audioId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "spellCorrectedText": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "spellCheckTimeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "audioUrl",
        "text",
        "spellCorrectedText",
        "timeTaken",
        "spellCheckTimeTaken",
        "queryId"
    ],
    "description": "AudioId is mapped to QueryId"
}
```
## userQuery
### incomingMessage
When is it generated: User sent a message to a bot
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "mediaIds": {
            "type": "array"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text"
    ],
    "description": "User sent a message to a bot"
}
```
### userHistory
When is it generated: Fetching user history at inbound
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        },
        "userHistory": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "messageId",
        "timeTaken",
        "did"
    ],
    "description": "Fetching user history at inbound"
}
```
### userInfo
When is it generated: Fetching user info - transformer
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "block": {
            "type": "string"
        },
        "district": {
            "type": "string"
        },
        "eventLog": {
            "type": "string"
        },
        "transformerId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text",
        "transformerId"
    ],
    "description": "Fetching user info - transformer"
}
```
### translateInput
When is it generated: translate - transformer
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "userManagementUrl": {
            "type": "string"
        },
        "textInEnglish": {
            "type": "string"
        },
        "eventLog": {
            "type": "string"
        },
        "transformerId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text",
        "transformerId"
    ],
    "description": "translate - transformer"
}
```
### nuralCoreference
When is it generated: nuralCoref - transformer
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "textInEnglish": {
            "type": "string"
        },
        "coreferencedText": {
            "type": "string"
        },
        "eventLog": {
            "type": "string"
        },
        "transformerId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text",
        "transformerId"
    ],
    "description": "nuralCoref - transformer"
}
```
### classifyQuestion
When is it generated: classifier - transformer
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "textInEnglish": {
            "type": "string"
        },
        "queryClass": {
            "type": "string"
        },
        "eventLog": {
            "type": "string"
        },
        "transformerId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text",
        "transformerId"
    ],
    "description": "classifier - transformer"
}
```
### retreiveSimilarChunks
When is it generated: retieveDocs - transformer
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "textInEnglish": {
            "type": "string"
        },
        "similarChunks": {
            "type": "array"
        },
        "eventLog": {
            "type": "string"
        },
        "transformerId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text",
        "transformerId"
    ],
    "description": "retieveDocs - transformer"
}
```
### NER
When is it generated: ner - transformer
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "textInEnglish": {
            "type": "string"
        },
        "NER": {
            "type": "array"
        },
        "eventLog": {
            "type": "string"
        },
        "transformerId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text",
        "transformerId"
    ],
    "description": "ner - transformer"
}
```
### llmResponse
When is it generated: llm - transformer
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "textInEnglish": {
            "type": "string"
        },
        "responseInEnglish": {
            "type": "string"
        },
        "response": {
            "type": "string"
        },
        "eventLog": {
            "type": "string"
        },
        "transformerId": {
            "type": "string"
        },
        "prompt": {
            "type": "array"
        },
        "translatedResponse": {
            "type": "string"
        },
        "streamStartLatency": {
            "type": "number"
        },
        "responseType": {
            "type": "string"
        },
        "isGuided": {
            "type": "string"
        },
        "isFlowEnd": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "transformerId"
    ],
    "description": "llm - transformer"
}
```
### userQuery
When is it generated: translate - transformer
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "textInEnglish": {
            "type": "string"
        },
        "responseInEnglish": {
            "type": "string"
        },
        "response": {
            "type": "string"
        },
        "eventLog": {
            "type": "string"
        },
        "transformerId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text",
        "response",
        "transformerId"
    ],
    "description": "translate - transformer"
}
```
### userQuery
When is it generated: textToSpeech - transformer
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "audioFileName": {
            "type": "string"
        },
        "audioUrl": {
            "type": "string",
            "format": "url"
        },
        "audioId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "textInEnglish": {
            "type": "string"
        },
        "responseInEnglish": {
            "type": "string"
        },
        "response": {
            "type": "string"
        },
        "language": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text",
        "timeTaken",
        "queryId",
        "response"
    ],
    "description": "textToSpeech - transformer"
}
```
### userQuery
When is it generated: When user plays audio at app (timesAudioUsed)
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "responseInEnglish": {
            "type": "string"
        },
        "timesAudioUsed": {
            "type": "number"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text"
    ],
    "description": "When user plays audio at app (timesAudioUsed)"
}
```
### userQuery
When is it generated: When an error is occured during query process
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "errorRate": {
            "type": "number"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId"
    ],
    "description": "When an error is occured during query process"
}
```
### userQuery
When is it generated: When user gets the response at app (responseAt)
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "responseInEnglish": {
            "type": "string"
        },
        "response": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "timeTaken"
    ],
    "description": "When user gets the response at app (responseAt)"
}
```
### detectLanguage
When is it generated: 
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "language": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "language"
    ],
    "description": ""
}
```
## userQueryInbound
### userQuery
When is it generated: A message was sent to user
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "mediaIds": {
            "type": "array"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "conversationId",
        "messageId",
        "timeTaken",
        "did"
    ],
    "description": "A message was sent to user"
}
```
### userQuery
When is it generated: XMessage to raw message conversion failed
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "mediaIds": {
            "type": "array"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "conversationId",
        "messageId",
        "did"
    ],
    "description": "XMessage to raw message conversion failed"
}
```
### userQuery
When is it generated: Raw message conversion to XMessage failed
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "mediaIds": {
            "type": "array"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "did"
    ],
    "description": "Raw message conversion to XMessage failed"
}
```
### userQuery
When is it generated: A registration request was sent to the bot
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "mediaIds": {
            "type": "array"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        },
        "userManagementUrl": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "conversationId",
        "messageId",
        "did",
        "userManagementUrl"
    ],
    "description": "A registration request was sent to the bot"
}
```
### userQuery
When is it generated: A registration request failed
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "mediaIds": {
            "type": "array"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        },
        "userManagementUrl": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "conversationId",
        "messageId",
        "did",
        "userManagementUrl"
    ],
    "description": "A registration request failed"
}
```
### reactionEvent
When is it generated: A user sent a feedback on a message
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        },
        "reactionType": {
            "type": "string"
        },
        "reactionText": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "messageId",
        "did",
        "reactionType"
    ],
    "description": "A user sent a feedback on a message"
}
```
### userQuery
When is it generated: User read the message sent by a bot
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "mediaIds": {
            "type": "array"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "conversationId",
        "messageId",
        "did"
    ],
    "description": "User read the message sent by a bot"
}
```
## AI-Tools
### userQuery
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "audioUrl": {
            "type": "string",
            "format": "url"
        },
        "audioId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": [
        "audioUrl",
        "text",
        "timeTaken"
    ],
    "description": "On return of this API call"
}
```
### userQuery
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "audioUrl": {
            "type": "string",
            "format": "url"
        },
        "audioId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": [
        "audioUrl",
        "text",
        "timeTaken"
    ],
    "description": "On return of this API call"
}
```
### translate
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "outputText": {
            "type": "string"
        }
    },
    "required": [
        "text",
        "timeTaken",
        "outputText"
    ],
    "description": "On return of this API call"
}
```
### transliterate
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "queryId": {
            "type": "string",
            "format": "uuid"
        },
        "outputText": {
            "type": "string"
        }
    },
    "required": [
        "text",
        "timeTaken",
        "outputText"
    ],
    "description": "On return of this API call"
}
```
## datasetInjestion
### translationDictionary
When is it generated: migration of data
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "createdAt": {
            "type": "number"
        }
    },
    "required": [
        "botId",
        "orgId"
    ],
    "description": "migration of data"
}
```
### officials
When is it generated: migration of data
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "createdAt": {
            "type": "number"
        }
    },
    "required": [
        "botId",
        "orgId"
    ],
    "description": "migration of data"
}
```
## documentService
### document
When is it generated: migration of data
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "createdAt": {
            "type": "number"
        }
    },
    "required": [
        "botId",
        "orgId"
    ],
    "description": "migration of data"
}
```
### upload
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "question": {
            "type": "string"
        },
        "result": {
            "type": "object"
        },
        "documentId": {
            "type": "array"
        },
        "requestId": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": [
        "botId",
        "orgId",
        "question",
        "result"
    ],
    "description": "On return of this API call"
}
```
### retrieve
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "sqlQuery": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "sqlQuery"
    ],
    "description": "On return of this API call"
}
```
## messageQuery
### messageSent
When is it generated: When user sends a message (send phoneNumber also)
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "textInEnglish": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text"
    ],
    "description": "When user sends a message (send phoneNumber also)"
}
```
### messageReceived
When is it generated: When user receives back a response for sent message
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "phoneNumber": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "textInEnglish": {
            "type": "string"
        },
        "responseInEnglish": {
            "type": "string"
        },
        "replyId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text",
        "timeTaken",
        "replyId"
    ],
    "description": "When user receives back a response for sent message"
}
```
## search
### fuzzy search
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "datasetId": {
            "type": "string",
            "format": "uuid"
        },
        "question": {
            "type": "string"
        },
        "field": {
            "type": "string"
        },
        "threshold": {
            "type": "number"
        },
        "result": {
            "type": "object"
        },
        "requestId": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": [
        "botId",
        "orgId",
        "timeTaken",
        "datasetId",
        "question",
        "field",
        "threshold",
        "result"
    ],
    "description": "On return of this API call"
}
```
### vector search
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "datasetId": {
            "type": "string",
            "format": "uuid"
        },
        "question": {
            "type": "string"
        },
        "field": {
            "type": "string"
        },
        "result": {
            "type": "object"
        },
        "requestId": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": [
        "botId",
        "orgId",
        "timeTaken",
        "datasetId",
        "question",
        "field",
        "result"
    ],
    "description": "On return of this API call"
}
```
### execute-query 
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "datasetId": {
            "type": "string",
            "format": "uuid"
        },
        "sqlQuery": {
            "type": "string"
        },
        "result": {
            "type": "object"
        },
        "requestId": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": [
        "botId",
        "orgId",
        "timeTaken",
        "datasetId",
        "sqlQuery",
        "result"
    ],
    "description": "On return of this API call"
}
```
## Data Insertion
### create schema
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "requestId": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": [
        "botId",
        "orgId",
        "timeTaken"
    ],
    "description": "On return of this API call"
}
```
### insertDataset
When is it generated: On return of this API call
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "schemaId": {
            "type": "string",
            "format": "uuid"
        },
        "requestId": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": [
        "botId",
        "orgId",
        "timeTaken",
        "schemaId"
    ],
    "description": "On return of this API call"
}
```
## Transformer Execution 
### DEFAULT_TRANSFORMER_START_EVENT
When is it generated: When the transformer execution begins  
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "transformerId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "messageId",
        "transformerId"
    ],
    "description": "When the transformer execution begins  "
}
```
### DEFAULT_TRANSFORMER_END_EVENT
When is it generated: When the transformer execution completes
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "transformerId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "orgId",
        "transformerId"
    ],
    "description": "When the transformer execution completes"
}
```
## micAction
### micTap
When is it generated: When user taps on mic to speak something
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "createdAt": {
            "type": "number"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "conversationId"
    ],
    "description": "When user taps on mic to speak something"
}
```
## aiToolProxyToolLatency
### t2sLatency
When is it generated: Time taken by T2S API
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "audioUrl": {
            "type": "string",
            "format": "url"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "conversationId",
        "messageId",
        "text",
        "timeTaken"
    ],
    "description": "Time taken by T2S API"
}
```
### s2tLatency
When is it generated: Time taken by S2T API
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "error": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "conversationId",
        "messageId",
        "timeTaken"
    ],
    "description": "Time taken by S2T API"
}
```
### detectedLatency
When is it generated: Time taken in detecting latency
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "userId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "conversationId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "text": {
            "type": "string"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "language": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "userId",
        "orgId",
        "messageId",
        "text"
    ],
    "description": "Time taken in detecting latency"
}
```
## NBMCBotTelemetry
### userQuery
When is it generated: Every time user interacts with the bot (phone number, question, answer, time)
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "timeTaken": {
            "type": "number"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        },
        "textInEnglish": {
            "type": "string"
        },
        "response": {
            "type": "string"
        },
        "question": {
            "type": "string"
        },
        "translatedResponse": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "messageId",
        "did",
        "textInEnglish",
        "question",
        "translatedResponse"
    ],
    "description": "Every time user interacts with the bot (phone number, question, answer, time)"
}
```
## OutboundResponse
### outboundResponse
When is it generated: Sent by outbound when response message is received
```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "botId": {
            "type": "string",
            "format": "uuid"
        },
        "orgId": {
            "type": "string",
            "format": "uuid"
        },
        "messageId": {
            "type": "string",
            "format": "uuid"
        },
        "audioUrl": {
            "type": "string",
            "format": "url"
        },
        "text": {
            "type": "string"
        },
        "createdAt": {
            "type": "number"
        },
        "did": {
            "type": "string"
        },
        "replyId": {
            "type": "string"
        }
    },
    "required": [
        "botId",
        "messageId",
        "did"
    ],
    "description": "Sent by outbound when response message is received"
}
```
