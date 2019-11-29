import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import * as rootSchema from 'gql/schemas/root';
import * as projectSchema from 'gql/schemas/project';

const makeSchema = () => {
  const schemas = [rootSchema, projectSchema];

  const typeDefs = schemas.reduce((acc, schema) => acc.concat(schema.typeDefs), '');

  const resolvers = Object.assign(schemas.reduce((acc, schema) => merge(acc, schema.resolvers), {}));

  return makeExecutableSchema({
    typeDefs,
    resolvers
  });
};

export { makeSchema };
