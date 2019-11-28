const { makeExecutableSchema } = require('graphql-tools');
const merge = require('lodash.merge');
const rootSchema = require('./schemas/root');
const userSchema = require('./schemas/user');

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

module.exports = { makeSchema };
