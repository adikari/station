const { prisma } = require('../generated/prisma-client');

const makeContext = ({ event }) => {
  if (!event) {
    return Promise.reject(new Error('No lambda event detected'));
  }

  return { prisma };
};

module.exports = { makeContext };
