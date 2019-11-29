const { DynamoDB } = require('aws-sdk');
const { graphql } = require('graphql');
const { makeContext } = require('../../make-context');
const { makeSchema } = require('../../make-schema');
const { getEvent } = require('../../../util/testUtil');

const mockGet = jest.fn();
DynamoDB.DocumentClient.prototype.get = mockGet;

describe('#Query.userById', () => {
  it('gets user by id', async () => {
    const query = `
      {
        userById(id: "userId") {
          id
        }
      }
    `;

    mockGet.mockReturnValue({
      promise: () => Promise.resolve({ Item: { userId: 123 } })
    });

    const context = makeContext({ event: getEvent({ id: '123' }) });

    const { data, errors } = await graphql(makeSchema(), query, null, context);

    expect(mockGet.mock.calls[0][0].Key).toEqual({ userId: 'userId' });
    expect(errors).toBeUndefined();
    expect(data.userById).toEqual({ id: '123' });
  });
});
