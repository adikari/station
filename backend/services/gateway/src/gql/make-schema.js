import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import * as rootSchema from './schemas/root';

const makeSchema = () => {
  const schemas = [rootSchema];

  const typeDefs = schemas.reduce(
    (acc, schema) => acc.concat(schema.typeDefs),
    ''
  );

  const resolvers = Object.assign(
    schemas.reduce((acc, schema) => merge(acc, schema.resolvers), {})
  );

  return makeExecutableSchema({
    typeDefs,
    resolvers
  });
};

export { makeSchema };
