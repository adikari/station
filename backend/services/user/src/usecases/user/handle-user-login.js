const makeHandleUserLogin = ({ createUser, getUser }) => async ({
  id,
  email,
  picture,
  username
}) => {
  const foundUser = await getUser(id);

  if (foundUser) {
    return null;
  }

  return createUser({ id, email, picture, username });
};

module.exports = { makeHandleUserLogin };
