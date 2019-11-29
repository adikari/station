import property from 'lodash.property';

const typeDefs = `
  extend type Query {
    projects: ProjectList
  }

  extend type Mutation {
    createProject(input: ProjectInput!): Project
  }

  type Pagination {
    pageSize: Int
    total: Int
    page: Int
  }

  type ProjectList {
    projects: [Project]
    pagination: Pagination
  }

  input ProjectInput {
    name: String!
    description: String
    shortDescription: String
    thumbnail: String
    cover: String
    owner: ID
    positions: [PositionInput]
    tags: [TagInput]
  }

  type User {
    id: ID
    username: String
    email: String
    firstname: String
    lastname: String
    accessRole: AccessRole
    followingProjects: [Project]
    owningProjects: [Project]
  }

  type Project {
    id: ID
    createdAt: String
    updatedAt: String
    shortDescription: String
    name: String
    thumbnail: String
    cover: String
    description: String
    positions: [Position]
    followers: [User]
    owner: User
    tags: [Tag]
  }

  type Position {
    id: ID
    name: String
    description: String
    user: User
    projects: [Project]
  }

  input PositionInput {
    id: ID
    name: String
    description: String
  }

  type Tag {
    id: ID
    name: String
  }

  input TagInput {
    id: ID
    name: String
  }

  enum AccessRole {
    ADMIN
    USER
  }
`;

const resolvers = {
  Query: {
    projects: (_, { page = 1, pageSize = 10 }, { project }) => project.getProjects({ page, pageSize })
  },
  Mutation: {
    createProject: (_, { input }, { project, viewer: { id } }) => project.createProject({ ...input, owner: id })
  },
  ProjectList: {
    projects: projects => projects,
    pagination: (_, { page = 1, pageSize = 10 }, { project }) =>
      project.getProjectCount().then(total => ({
        total,
        page,
        pageSize
      }))
  },
  Pagination: {
    total: property('total'),
    page: property('page'),
    pageSize: property('pageSize')
  },
  Project: {
    id: property('id'),
    name: property('name'),
    description: property('description')
  }
};

export { typeDefs, resolvers };
