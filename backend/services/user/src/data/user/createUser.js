const { documentClient } = require('../../clients/documentClient');
const { USER_TABLE_NAME } = require('../../config');
const { logger } = require('../../util/logger');

const createUser = ({
  userId,
  email,
  username,
  picture,
  firstname,
  lastname
}) => {
  const user = {
    userId,
    email,
    username,
    picture,
    firstname,
    lastname,
    createdAt: Date.now()
  };

  const params = {
    TableName: USER_TABLE_NAME,
    Item: user
  };

  return documentClient
    .put(params)
    .promise()
    .then(() => user)
    .catch(error => {
      logger.error('Could not create user', error);
      return null;
    });
};

module.exports = { createUser };
