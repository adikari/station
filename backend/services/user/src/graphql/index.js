const { ApolloServer, gql } = require('apollo-server-lambda');
const { makeSchema } = require('./make-schema');
const { makeContext } = require('./make-context');

const server = new ApolloServer({
  schema: makeSchema(),
  context: makeContext
});

exports.handler = server.createHandler();
