const { parentPort, workerData } = require('worker_threads');
import Ajv, { ValidateFunction } from "ajv";
import addFormats from "ajv-formats";

const requestSchema = {
  "type": "object",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "required": [
    "generator",
    "version",
    "timestamp",
    "actorId",
    "actorType",
    "env",
    "eventId",
    "event",
    "subEvent",
    "eventData"
  ],
  "properties": {
    "generator": {
      "type": "string"
    },
    "version": {
      "type": "string"
    },
    "timestamp": {
      "type": "number"
    },
    "actorId": {
      "type": "string"
    },
    "actorType": {
      "type": "string"
    },
    "sessionId": {
      "type": "string"
    },
    "deviceId": {
      "type": "string"
    },
    "env": {
      "type": "string"
    },
    "eventId": {
      "type": "string"
    },
    "event": {
      "type": "string"
    },
    "subEvent": {
      "type": "string"
    },
    "timeElapsed": {
      "type": "number"
    },
    "os": {
      "type": "string"
    },
    "browser": {
      "type": "string"
    },
    "browserVersion": {
      "type": "string"
    },
    "deviceType": {
      "type": "string"
    },
    "platform": {
      "type": "string"
    },
    "ip": {
      "type": "string"
    },
    "eventData": {
      "type": "object"
    }
  },
  "description": "BFF received audio from a bot"
}

const eventSchema: any[] = workerData.eventSchema;

const ajv: Ajv = new Ajv({ removeAdditional: 'all' });
addFormats(ajv);
const validateMap: Map<string, ValidateFunction> = new Map();

eventSchema.forEach((event) => {
  if (!validateMap.has(event.event_id)) {
    validateMap.set(
      event.event_id,
      ajv.compile(JSON.parse(JSON.stringify(event.schema))),
    );
  }
});

const requestBodyValidator = ajv.compile(requestSchema);

function removeNullKeys(obj: any): any {
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach(key => {
      if (obj[key] === null) {
        delete obj[key];
      } else if (typeof obj[key] === 'object') {
        removeNullKeys(obj[key]);
      }
    });
  }
  return obj;
}

function validateEventData(eventData: any) {
  if (!validateMap.has(eventData.eventId)) {
    return {
      error: true,
      errorList: [`No event found with eventId: ${eventData.eventId}`]
    }
  }
  const validator = validateMap.get(eventData.eventId);
  validator(eventData.eventData)
  if (validator.errors !== null) {
    validator.errors[0]['eventId'] = eventData.eventId;
    return {
      error: true,
      errorList: validator.errors
    }
  }
  return {
    error: false,
    errorList: []
  }
}

parentPort.on('message', (eventData) => {
  let errorData = [];
  let validatedData = [];
  for (let i = 0; i < eventData.length; i++) {
    let bodyValidated = true;
    requestBodyValidator(eventData[i]);
    if (requestBodyValidator.errors !== null) {
      bodyValidated = false;
      errorData.push(...requestBodyValidator.errors)
    }
    eventData[i] = removeNullKeys(eventData[i]);
    const validationResponse = validateEventData(eventData[i]);
    if (validationResponse.error) {
      bodyValidated = false;
      errorData.push(...validationResponse.errorList);
    }
    if (bodyValidated) {
      validatedData.push(eventData[i]);
    }
  }
  parentPort.postMessage({ valid: true, validatedData, errorData });
});
