import { ApolloServer } from 'apollo-server-lambda';
import { makeSchema } from 'graphql/make-schema';
import { makeContext } from 'graphql/make-context';

const server = new ApolloServer({
  schema: makeSchema(),
  context: makeContext
});

const handler = server.createHandler();

export { handler };
