const { graphql } = require('graphql');

const mockCreateProject = jest.fn();
jest.mock('../../../generated/prisma-client', () => {
  return {
    prisma: {
      createProject: mockCreateProject
    }
  };
});

const { makeContext } = require('../../make-context');
const { makeSchema } = require('../../make-schema');

describe('Mutation: createProject', () => {
  it('should create project', async () => {
    const query = `
        mutation {
          createProject(input: { name: "name", description: "description"}) {
            id
          }
        }
    `;

    mockCreateProject.mockResolvedValue({
      id: '345'
    });

    const context = makeContext({ event: 'event' });

    const result = await graphql(makeSchema(), query, null, context);

    expect(result.errors).toBeUndefined();
    expect(mockCreateProject).toHaveBeenCalledWith({ name: 'name', description: 'description' });
    expect(result.data.createProject).toEqual({
      id: '345'
    });
  });
});
