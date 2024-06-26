const fs = require('fs');
const csv = require('csv-parser');

const csvToAjvTypeMapping = JSON.parse(fs.readFileSync('./csv.ajv.type.mapping.json'));
const csvToClickhouseTypeMapping = JSON.parse(fs.readFileSync('./csv.clickhouse.type.mapping.json'));

const schemaDraft = "http://json-schema.org/draft-07/schema#";

let header = null;
const schemaList = [];
let lastEventName = '';
let eventDataHeaderStartIndex;

const UNAVAILABLE_MAPPING_CODE = 9;

fs.createReadStream('events.csv')
  .pipe(csv())
  .on('data', (row) => {
    if (!header) {
        header = Object.keys(row);
        const indexOfEventIdColumn = header.indexOf('eventId');
        eventDataHeaderStartIndex = indexOfEventIdColumn + 1;
    }
    if (row['eventName'] === '') {
        row['eventName'] = lastEventName;
    }
    const eventId = row['eventId']
    const eventName = row['eventName'];
    lastEventName = eventName;
    const subEventName = row['subEventName'];
    const eventDesc = row['When is it generated'];

    const schema = {
        '$schema': schemaDraft,
        type: 'object',
        properties: {},
        required: [],
        description: eventDesc
    };

    const keys = Object.keys(row)
    for (let i = eventDataHeaderStartIndex; i < keys.length; i++) {
        if (row[keys[i]] === '') continue;
        let key = keys[i].split('|')[0];
        let dataType = keys[i].split('|')[1];
        let value = row[keys[i]];
        if (value.trim().toLowerCase() === 'required') {
            schema.required.push(key.trim());
        }
        schema.properties[key.trim()] = csvToAjvTypeMapping[dataType.trim().toLowerCase()];
        if (!schema.properties[key.trim()]) {
            console.error(`Mapping does not exists for ${dataType.trim().toLowerCase()} type in csv.ajv.type.mapping.json`);
            process.exit(UNAVAILABLE_MAPPING_CODE);
        }
        if (!csvToClickhouseTypeMapping[dataType.trim().toLowerCase()]) {
            console.error(`Mapping does not exists for ${dataType.trim().toLowerCase()} type in csv.clickhouse.type.mapping.json`);
            process.exit(UNAVAILABLE_MAPPING_CODE);
        }
    }
    schemaList.push({
        eventProperties: {
            eventId: eventId,
            eventName: eventName,
            subEventName: subEventName
        },
        eventSchema: schema
    })
  })
  .on('end', () => {
    generateDocs(schemaList);
    outputSchemaJson(schemaList);
    generateMigrationSql(header, '1');
  });

function h1(text) {
    return `# ${text}\n`;
}

function h2(text) {
    return `## ${text}\n`;
}

function h3(text) {
    return `### ${text}\n`;
}

function plainText(text) {
    return `${text}\n`;
}

function codeChunk(text, type) {
    return `\`\`\`${type}\n${convertToIndentedJson(text)}\n\`\`\`\n`;
}

function convertToIndentedJson(jsonObject) {
    const indentedJsonText = JSON.stringify(jsonObject, null, 4);
    return indentedJsonText;
}

function generateDocs(schemaList) {
    let docs = '';
    docs = docs + h1('Event Data')
    docs = docs + plainText('These are auto-generated schema specification through CSV')
    const eventMap = {};
    for (let i = 0; i < schemaList.length; i++) {
        if (!eventMap[schemaList[i].eventProperties.eventName]) {
            eventMap[schemaList[i].eventProperties.eventName] = []
        }
        eventMap[schemaList[i].eventProperties.eventName].push(schemaList[i])
    }
    const eventNames = Object.keys(eventMap);
    for (const event of eventNames) {
        docs = docs + h2(event);
        for (const schema of eventMap[event]) {
            docs = docs + h3(schema.eventProperties.subEventName);
            docs = docs + plainText(`When is it generated: ${schema.eventSchema.description}`);
            docs = docs + codeChunk(schema.eventSchema, 'json')
        }
    }
    fs.writeFileSync('../docs/event-schema-docs.md', docs);
}

function outputSchemaJson(schemaList) {
    fs.writeFileSync('schema.json', JSON.stringify(schemaList, null, 4));
}

function generateMigrationSql(headers, version) {
    let sql = '';
    sql = sql + `CREATE TABLE IF NOT EXISTS event\n`;
    sql = sql + `(\n`
    sql = sql + `\tgenerator String,\n`
    sql = sql + `\tversion String,\n`
    sql = sql + `\ttimestamp DateTime,\n`
    sql = sql + `\tactorId String,\n`
    sql = sql + `\tactorType String,\n`
    sql = sql + `\tsessionId Nullable(String),\n`
    sql = sql + `\tdeviceId Nullable(String),\n`
    sql = sql + `\tenv String,\n`
    sql = sql + `\teventId String,\n`
    sql = sql + `\tevent String,\n`
    sql = sql + `\tsubEvent Nullable(String),\n`
    sql = sql + `\ttimeElapsed Nullable(UInt32),\n`
    sql = sql + `\tos Nullable(String),\n`
    sql = sql + `\tbrowser Nullable(String),\n`
    sql = sql + `\tbrowserVersion Nullable(String),\n`
    sql = sql + `\tdeviceType Nullable(String),\n`
    sql = sql + `\tplatform Nullable(String),\n`
    sql = sql + `\tip String`
    for (let i = eventDataHeaderStartIndex; i < headers.length; i++) {
        sql = sql + `,\n`
        const field = headers[i].split('|')[0].trim();
        const type = headers[i].split('|')[1].trim();
        sql = sql + `\t${field} Nullable(${csvToClickhouseTypeMapping[type]})`
    }
    sql = sql + `\n)\n`
    sql = sql + `ENGINE = MergeTree\n`
    sql = sql + `ORDER BY timestamp;\n`
    fs.writeFileSync('01.clickhouse.migration.sql', sql);
}