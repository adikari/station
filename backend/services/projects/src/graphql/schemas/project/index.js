const property = require('lodash.property');

const typeDefs = `
  extend type Query {
    projects: [Project]
  }

  type Project {
    id: ID
    name: String
    description: String
  }
`;

const resolvers = {
  Query: {
    projects: (parent, args, { project }) => project.getProjects()
  },
  Project: {
    id: property('id'),
    name: property('name'),
    description: property('description')
  }
};

module.exports = { typeDefs, resolvers };
