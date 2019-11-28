const typeDefs = `
  type User {
    id: ID
    username: String
    email: String
    firstname: String
    lastname: String
    accessRole: AccessRole
  }

  enum AccessRole {
    ADMIN
    USER
  }

  input CreateUserInput {
    username: String!
    email: String!
    firstname: String
    lastname: String
  }

  extend type Query {
    users: [User]
  }

  extend type Mutation {
    createProject(input: CreateUserInput!): User
  }
`;

const resolvers = {
  Query: {
    users: () => []
  },
  Mutation: {
    createProject: (_, { input }, { project, viewer: { id } }) =>
      project.createProject({ ...input, owner: id })
  }
};

module.exports = { typeDefs, resolvers };
