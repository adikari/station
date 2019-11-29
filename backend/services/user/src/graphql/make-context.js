const user = require('../usecases/user');
const { getViewer } = require('../util/viewer');

const makeContext = ({ event }) => {
  if (!event) {
    return Promise.reject(new Error('No lambda event detected'));
  }

  return {
    user,
    viewer: getViewer({ event })
  };
};

module.exports = { makeContext };
