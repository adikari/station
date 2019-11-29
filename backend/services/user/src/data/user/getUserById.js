const get = require('lodash.get');
const { documentClient } = require('../../clients/documentClient');
const { USER_TABLE_NAME } = require('../../config');
const { logger } = require('../../util/logger');

const getUserById = userId => {
  const params = {
    TableName: USER_TABLE_NAME,
    Key: { userId }
  };

  return documentClient
    .get(params)
    .promise()
    .then(response => get(response, 'Item', null))
    .catch(error => {
      logger.error('Could not get user', error);
      return null;
    });
};

module.exports = { getUserById };
