const typeDefs = `
    type Query {
      projectsHealthCheck: Boolean!
    }

    type Mutation {
      projectsEcho(input: ProjectsEchoInput!): ProjectsEchoResponse
    }

    input ProjectsEchoInput {
        echo: String
    }

    type ProjectsEchoResponse {
        echo: String
    }
`;

const resolvers = {
  Query: {
    projectsHealthCheck: () => true
  },
  Mutation: {
    projectsEcho: (_, { input }) => ({ echo: input.echo })
  }
};

export { typeDefs, resolvers };
