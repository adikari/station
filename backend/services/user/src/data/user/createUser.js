import { documentClient } from 'clients/documentClient';
import { USER_TABLE_NAME } from 'config';
import { logger } from 'util/logger';

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

export { createUser };
