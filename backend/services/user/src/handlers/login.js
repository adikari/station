const get = require('lodash.get');
const { handleUserLogin } = require('../usecases/user');

const handler = async event => {
  const { data } = JSON.parse(event.body);
  const auth0User = get(data, 'user');

  const user = {
    email: auth0User.email,
    userId: auth0User.user_id,
    picture: auth0User.picture,
    username: auth0User.name
  };

  const response = await handleUserLogin(user);

  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};

module.exports = {
  handler
};
