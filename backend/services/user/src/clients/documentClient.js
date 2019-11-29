const { DynamoDB } = require('aws-sdk');

const documentClient = new DynamoDB.DocumentClient({
  convertEmptyValues: true
});

module.exports = { documentClient };
