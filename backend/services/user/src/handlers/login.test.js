const mockGetUser = jest.fn();
const mockCreateUser = jest.fn();

const { handler } = require('./login');
const event = require('../../events/auth0login');

jest.mock('../data/user', () => ({
  getUser: mockGetUser,
  createUser: mockCreateUser
}));

describe('#loginHandler', () => {
  describe('user does not exist', () => {
    it('should create user', async () => {
      mockGetUser.mockResolvedValue(null);
      mockCreateUser.mockResolvedValue({ id: 'userid' });
      const response = await handler(event);

      expect(mockGetUser).toHaveBeenCalledWith('auth0|0123456789');
      expect(mockCreateUser).toHaveBeenCalledWith({
        userId: 'auth0|0123456789',
        email: 'jdoe@foobar.com',
        picture: 'http://foobar.com/pictures/jdoe.png',
        username: 'jdoe@foobar.com'
      });

      expect(response).toEqual({
        statusCode: 200,
        body: '{"id":"userid"}'
      });
    });
  });

  describe('user exists', () => {
    it('should do nothing', async () => {
      mockGetUser.mockResolvedValue({ id: 'userid' });
      await handler(event);

      expect(mockGetUser).toHaveBeenCalledWith('auth0|0123456789');
      expect(mockCreateUser).not.toHaveBeenCalled();
    });
  });
});
