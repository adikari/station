const { makeExecutableSchema } = require('graphql-tools');

const rootSchema = require('./schemas/root');
const projectSchema = require('./schemas/project');

const makeSchema = () => {
  const schemas = [rootSchema, projectSchema];

  const typeDefs = schemas.reduce((acc, schema) => acc.concat(schema.typeDefs), '');

  const resolvers = schemas.reduce((acc, schema) => Object.assign(acc, schema.resolvers), {});

  return makeExecutableSchema({
    typeDefs,
    resolvers
  });
};

module.exports = { makeSchema };
