const user = require('../usecases/user');

const makeContext = ({ event }) => {
  if (!event) {
    return Promise.reject(new Error('No lambda event detected'));
  }

  return {
    user,
    viewer: {}
  };
};

module.exports = { makeContext };
