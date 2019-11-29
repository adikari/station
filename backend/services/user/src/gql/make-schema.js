import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import * as rootSchema from './schemas/root';
import * as userSchema from './schemas/user';

const makeSchema = () => {
  const schemas = [rootSchema, userSchema];

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
