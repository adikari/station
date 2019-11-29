const mockError = jest.fn();
const mockPut = jest.fn();

const { DynamoDB } = require('aws-sdk');
const { createUser } = require('./createUser');

jest.mock('../../config', () => ({
  USER_TABLE_NAME: 'user-table-name'
}));

jest.mock('../../util/logger', () => ({
  logger: { error: mockError }
}));

DynamoDB.DocumentClient.prototype.put = mockPut;

const realDate = Date;
const mockUser = {
  userId: 'anton',
  email: 'anton@foo.com',
  username: 'sonofanton',
  picture: 'picture'
};

describe('CreateUser', () => {
  afterEach(() => {
    Date.now = realDate.now;
  });

  it('should create user', async () => {
    Date.now = jest.fn(() => 12345);

    mockPut.mockReturnValue({ promise: () => Promise.resolve({}) });

    const response = await createUser(mockUser);

    expect(response).toEqual({ ...mockUser, createdAt: 12345 });
    expect(mockPut).toHaveBeenCalledWith({
      TableName: 'user-table-name',
      Item: { ...mockUser, createdAt: 12345 }
    });
  });

  it('should handle error', async () => {
    mockPut.mockReturnValue({
      promise: () => Promise.reject(new Error('some error'))
    });

    const response = await createUser(mockUser);

    expect(mockPut).toHaveBeenCalledWith({
      TableName: 'user-table-name',
      Item: { ...mockUser, createdAt: 12345 }
    });

    expect(response).toBeNull();
    expect(mockError).toHaveBeenCalledWith(
      'Could not create user',
      new Error('some error')
    );
  });
});
