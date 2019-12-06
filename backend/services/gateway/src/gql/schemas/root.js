const typeDefs = `
    type Query {
      gatewayHealthCheck: Boolean!
    }

    type Mutation {
      gatewayEcho(input: GatewayEchoInput!): GatewayEchoResponse
    }

    input GatewayEchoInput {
        echo: String
    }

    type GatewayEchoResponse {
        echo: String
    }
`;

const resolvers = {
  Query: {
    gatewayHealthCheck: () => true
  },
  Mutation: {
    gatewayEcho: (_, { input }) => ({ echo: input.echo })
  }
};

export { typeDefs, resolvers };
