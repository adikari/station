const property = require('lodash.property');

const typeDefs = `
  extend type Query {
    projects: [Project]
  }

  extend type Mutation {
    createProject(input: CreateProjectInput!): Project
  }

  input CreateProjectInput {
    name: String!
    description: String!
  }

  type Project {
    id: ID
    name: String
    description: String
  }
`;

const resolvers = {
  Query: {
    projects: (_, __, { project }) => project.getProjects()
  },
  Mutation: {
    createProject: (_, { input }, { project }) => project.createProject(input)
  },
  Project: {
    id: property('id'),
    name: property('name'),
    description: property('description')
  }
};

module.exports = { typeDefs, resolvers };
