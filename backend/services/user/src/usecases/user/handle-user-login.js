const makeHandleUserLogin = ({ createUser, getUser }) => async ({
  userId,
  email,
  picture,
  username
}) => {
  const foundUser = await getUser(userId);

  if (foundUser) {
    return null;
  }

  return createUser({ userId, email, picture, username });
};

module.exports = { makeHandleUserLogin };
