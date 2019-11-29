const property = require('lodash.property');

const typeDefs = `
  type User {
    id: ID
    username: String
    email: String
    firstname: String
    lastname: String
  }

  input CreateUserInput {
    email: String!
    username: String!
    firstname: String
    lastname: String
  }

  extend type Query {
    user: User
    userById(id: ID!): User
    userByEmail(email: String!): User
  }

  extend type Mutation {
    createUser(input: CreateUserInput!): User
  }
`;

const resolvers = {
  Query: {
    user: (_, __, { user, viewer }) => {
      const userId = viewer.id;

      return userId ? user.byId({ userId }) : null;
    },
    userById: (_, { id }, { user }) => user.byId({ userId: id }),
    userByEmail: (_, { email }, { user }) => user.byEmail({ email })
  },
  User: {
    id: property('userId')
  }
};

module.exports = { typeDefs, resolvers };
