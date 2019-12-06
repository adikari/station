import { ApolloServer } from 'apollo-server-lambda';
import { makeSchema } from 'gql/make-schema';
import { makeContext } from 'gql/make-context';
import { ENGINE_API_KEY, STAGE } from 'config';

const server = new ApolloServer({
  schema: makeSchema(),
  context: makeContext,
  engine: {
    apiKey: ENGINE_API_KEY,
    sendHeaders: { onlyNames: ['x-api-key'] },
    schemaTag: STAGE
  }
});

const handler = server.createHandler();

export { handler };
