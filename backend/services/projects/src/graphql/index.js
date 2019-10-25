const { ApolloServer, gql } = require('apollo-server-lambda');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    projectsHealthCheck: Boolean!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    projectsHealthCheck: () => true
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

exports.handler = server.createHandler();
