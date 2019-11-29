const mockGet = jest.fn();
const mockError = jest.fn();

const { DynamoDB } = require('aws-sdk');
const { getUser } = require('./getUser');

DynamoDB.DocumentClient.prototype.get = mockGet;

jest.mock('../../config', () => ({
  USER_TABLE_NAME: 'user-table-name'
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
    mockGet.mockReturnValue({
      promise: () => Promise.resolve({ Item: mockUser })
    });

    const response = await getUser('anton');

    expect(mockGet).toHaveBeenCalledWith({
      TableName: 'user-table-name',
      Key: { userId: 'anton' }
    });

    expect(response).toEqual(mockUser);
  });

  it('should handle error', async () => {
    mockGet.mockReturnValue({
      promise: () => Promise.reject(new Error('some error'))
    });

    const response = await getUser('anton');

    expect(mockGet).toHaveBeenCalledWith({
      TableName: 'user-table-name',
      Key: { userId: 'anton' }
    });

    expect(response).toBeNull();
    expect(mockError).toHaveBeenCalledWith(
      'Could not get user',
      new Error('some error')
    );
  });
});
