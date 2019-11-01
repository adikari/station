const project = require('../usecases/project');

const makeContext = ({ event }) => {
  if (!event) {
    return Promise.reject(new Error('No lambda event detected'));
  }

  return { project };
};

module.exports = { makeContext };
