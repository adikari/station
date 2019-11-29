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
    createUser(input: CreateUserInput!): User
  }
`;

const resolvers = {
  Query: {
    userById: (_, { userId }, { user }) => user.byId({ userId })
  }
};

module.exports = { typeDefs, resolvers };
