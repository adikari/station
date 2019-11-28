const { graphql } = require('graphql');

const mockProjects = jest.fn();
jest.mock('../../../generated/prisma-client', () => {
  return {
    prisma: {
      projects: mockProjects
    }
  };
});

const { makeContext } = require('../../make-context');
const { makeSchema } = require('../../make-schema');

describe('Query: projects', () => {
  it('should get projects', async () => {
    const query = `
        {
          projects {
            id
            name
            description
          }
        }
    `;

    mockProjects.mockResolvedValue([
      {
        id: '345',
        name: 'My Project',
        description: 'Some description'
      }
    ]);

    const context = makeContext({ event: 'event' });

    const result = await graphql(makeSchema(), query, null, context);

    expect(result.errors).toBeUndefined();
    expect(result.data.projects).toEqual([
      {
        id: '345',
        name: 'My Project',
        description: 'Some description'
      }
    ]);
  });
});
