import get from 'lodash.get';
import { documentClient } from 'clients/documentClient';
import { USER_TABLE_NAME } from 'config';
import { logger } from 'util/logger';

const getUserById = ({ userId }) => {
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

export { getUserById };
