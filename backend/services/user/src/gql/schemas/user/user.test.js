import { DynamoDB } from 'aws-sdk';
import { graphql } from 'graphql';
import { makeContext } from 'gql/make-context';
import { makeSchema } from 'gql/make-schema';
import { getEvent } from 'util/testUtil';

const mockGet = jest.fn();
DynamoDB.DocumentClient.prototype.get = mockGet;

describe('#Query.user', () => {
  it('gets user', async () => {
    const query = `
      {
        user {
          id
        }
      }
    `;

    mockGet.mockReturnValue({
      promise: () => Promise.resolve({ Item: { userId: 123 } })
    });

    const context = makeContext({ event: getEvent({ id: '123' }) });

    const { data, errors } = await graphql(makeSchema(), query, null, context);

    expect(mockGet.mock.calls[0][0].Key).toEqual({ userId: '123' });
    expect(errors).toBeUndefined();
    expect(data.user).toEqual({ id: '123' });
  });

  it('return null if viewer does not have userid', async () => {
    const query = `
      {
        user {
          id
        }
      }
    `;

    const context = makeContext({ event: getEvent('') });

    const { data, errors } = await graphql(makeSchema(), query, null, context);

    expect(mockGet).not.toHaveBeenCalled();
    expect(errors).toBeUndefined();
    expect(data.user).toEqual(null);
  });
});
