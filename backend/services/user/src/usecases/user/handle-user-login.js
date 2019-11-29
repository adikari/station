const { logger } = require('../../util/logger');

const makeHandleUserLogin = ({ createUser, getUserByEmail }) => async ({
  userId,
  email,
  picture,
  username,
  firstname,
  lastname
}) => {
  const foundUser = await getUserByEmail({ email });

  if (foundUser) {
    logger.log('User found. skipping..', foundUser);
    return null;
  }

  logger.log('Creating new user..', email);

  return createUser({ userId, email, picture, username, firstname, lastname });
};

module.exports = { makeHandleUserLogin };
