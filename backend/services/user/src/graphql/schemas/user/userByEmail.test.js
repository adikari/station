const { DynamoDB } = require('aws-sdk');
const { graphql } = require('graphql');
const { makeContext } = require('../../make-context');
const { makeSchema } = require('../../make-schema');
const { getEvent } = require('../../../util/testUtil');

const mockQuery = jest.fn();
DynamoDB.DocumentClient.prototype.query = mockQuery;

describe('#Query.userByEmail', () => {
  it('gets user by email', async () => {
    const query = `
      {
        userByEmail(email: "anton@foo.com") {
          id
        }
      }
    `;

    mockQuery.mockReturnValue({
      promise: () => Promise.resolve({ Items: [{ userId: 123 }] })
    });

    const context = makeContext({ event: getEvent({ id: '123' }) });

    const { data, errors } = await graphql(makeSchema(), query, null, context);

    expect(mockQuery.mock.calls[0][0].ExpressionAttributeValues).toEqual({
      ':hkey': 'anton@foo.com'
    });

    expect(errors).toBeUndefined();
    expect(data.userByEmail).toEqual({ id: '123' });
  });
});
