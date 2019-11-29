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
    users: () => []
  },
  Mutation: {
    createUser: (_, { input }, { user, viewer: { id } }) =>
      user.create({ ...input, owner: id })
  }
};

module.exports = { typeDefs, resolvers };
