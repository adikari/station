const { documentClient } = require('../../clients/documentClient');
const { USER_TABLE_NAME } = require('../../config');

const createUser = user => {
  console.log(USER_TABLE_NAME);
  console.log('user', user);
  console.log(documentClient);
  return Promise.resolve(user);
};

module.exports = { createUser };
