const typeDefs = `
    type Query {
      userHealthCheck: Boolean!
    }

    type Mutation {
      userEcho(input: UserEchoInput!): UserEchoResponse
    }

    input UserEchoInput {
        echo: String
    }

    type UserEchoResponse {
        echo: String
    }
`;

const resolvers = {
  Query: {
    userHealthCheck: () => true
  },
  Mutation: {
    userEcho: (_, { input }) => ({ echo: input.echo })
  }
};

module.exports = { typeDefs, resolvers };
