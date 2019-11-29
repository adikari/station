import { DynamoDB } from 'aws-sdk';

const documentClient = new DynamoDB.DocumentClient({
  convertEmptyValues: true
});

export { documentClient };
