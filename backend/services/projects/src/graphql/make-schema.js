const { makeExecutableSchema } = require('graphql-tools');

const rootSchema = require('./schemas/root');

const makeSchema = () => {
  const schemas = [rootSchema];

  const typeDefs = schemas.reduce((acc, schema) => acc.concat(schema.typeDefs), '');

  const resolvers = schemas.reduce((acc, schema) => Object.assign(acc, schema.resolvers), {});

  return makeExecutableSchema({
    typeDefs,
    resolvers
  });
};

module.exports = { makeSchema };
