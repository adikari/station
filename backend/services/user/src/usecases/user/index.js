const { createUser, getUser } = require('../../data/user');
const { makeHandleUserLogin } = require('./handle-user-login');

const handleUserLogin = makeHandleUserLogin({ createUser, getUser });

module.exports = { handleUserLogin };
