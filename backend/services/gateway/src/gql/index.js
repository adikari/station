import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server-lambda';
import { makeContext } from 'gql/make-context';

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway,
  context: makeContext,
  subscriptions: false
});

const handler = server.createHandler();

export { handler };
