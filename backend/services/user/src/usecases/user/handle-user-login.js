const makeHandleUserLogin = ({ createUser, getUserByEmail }) => async ({
  userId,
  email,
  picture,
  username,
  firstname,
  lastname
}) => {
  const foundUser = await getUserByEmail(email);

  if (foundUser) {
    return null;
  }

  return createUser({ userId, email, picture, username, firstname, lastname });
};

module.exports = { makeHandleUserLogin };
