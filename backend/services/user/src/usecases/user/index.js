const { createUser, getUserByEmail, getUserById } = require('../../data/user');
const { makeHandleUserLogin } = require('./handle-user-login');

const handleUserLogin = makeHandleUserLogin({ createUser, getUserByEmail });

module.exports = {
  handleUserLogin,
  byEmail: getUserByEmail,
  byId: getUserById
};
