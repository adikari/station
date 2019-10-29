const { ApolloServer } = require('apollo-server-lambda');
const { makeSchema } = require('./make-schema');
const { makeContext } = require('./make-context');

const server = new ApolloServer({ schema: makeSchema(), context: makeContext });

console.log('server');

exports.handler = server.createHandler();
