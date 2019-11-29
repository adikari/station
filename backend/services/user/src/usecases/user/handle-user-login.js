const makeHandleUserLogin = ({ createUser, getUser }) => async ({
  userId,
  email,
  picture,
  username,
  firstname,
  lastname
}) => {
  const foundUser = await getUser(userId);

  if (foundUser) {
    return null;
  }

  return createUser({ userId, email, picture, username, firstname, lastname });
};

module.exports = { makeHandleUserLogin };
