import { ApolloServer } from 'apollo-server-lambda';
import { makeSchema } from 'gql/make-schema';
import { makeContext } from 'gql/make-context';

const server = new ApolloServer({
  schema: makeSchema(),
  context: makeContext
});

const handler = server.createHandler();

export { handler };
