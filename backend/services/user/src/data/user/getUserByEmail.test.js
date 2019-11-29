const mockQuery = jest.fn();
const mockError = jest.fn();

const { DynamoDB } = require('aws-sdk');
const { getUserByEmail } = require('./getUserByEmail');

DynamoDB.DocumentClient.prototype.query = mockQuery;

jest.mock('../../config', () => ({
  USER_TABLE_NAME: 'user-table-name',
  USER_TABLE_EMAIL_INDEX: 'user-index-name'
}));

jest.mock('../../util/logger', () => ({
  logger: { error: mockError }
}));
const mockUser = {
  userId: 'anton',
  email: 'anton@foo.com',
  username: 'sonofanton',
  picture: 'picture'
};

describe('#getUser', () => {
  it('should get user', async () => {
    mockQuery.mockReturnValue({
      promise: () => Promise.resolve({ Items: [mockUser] })
    });

    const response = await getUserByEmail('anton@foo.com');

    expect(mockQuery).toHaveBeenCalledWith({
      TableName: 'user-table-name',
      IndexName: 'user-index-name',
      KeyConditionExpression: 'email = :hkey',
      ExpressionAttributeValues: { ':hkey': 'anton@foo.com' }
    });

    expect(response).toEqual(mockUser);
  });

  it('should handle error', async () => {
    mockQuery.mockReturnValue({
      promise: () => Promise.reject(new Error('some error'))
    });

    const response = await getUserByEmail('anton@foo.com');

    expect(mockQuery).toHaveBeenCalledWith({
      TableName: 'user-table-name',
      IndexName: 'user-index-name',
      KeyConditionExpression: 'email = :hkey',
      ExpressionAttributeValues: { ':hkey': 'anton@foo.com' }
    });

    expect(response).toBeNull();
    expect(mockError).toHaveBeenCalledWith(
      'Could not get user',
      new Error('some error')
    );
  });
});
