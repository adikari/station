const get = require('lodash.get');
const { documentClient } = require('../../clients/documentClient');
const { logger } = require('../../util/logger');

const { USER_TABLE_NAME, USER_TABLE_EMAIL_INDEX } = require('../../config');

const getUserByEmail = ({ email }) => {
  const params = {
    TableName: USER_TABLE_NAME,
    IndexName: USER_TABLE_EMAIL_INDEX,
    KeyConditionExpression: 'email = :hkey',
    ExpressionAttributeValues: {
      ':hkey': email
    }
  };

  return documentClient
    .query(params)
    .promise()
    .then(result => get(result, 'Items[0]', null))
    .catch(error => {
      logger.error('Could not get user', error);
      return null;
    });
};

module.exports = { getUserByEmail };
