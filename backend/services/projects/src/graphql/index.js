const { ApolloServer, gql } = require('apollo-server-lambda');
const { makeSchema } = require('./make-schema');

const makeGraphqlContext = ({ event }) => {
  if (!event) {
    return Promise.reject(new Error('No lambda event detected'));
  }

  return {
    db: 'hello'
  };
};

const server = new ApolloServer({
  schema: makeSchema(),
  context: makeGraphqlContext
});

exports.handler = server.createHandler();
