const get = require('lodash.get');

const handler = async event => {
  const { data } = JSON.parse(event.body);

  const userId = get(data, 'user.user_id') || '';

  console.log('userid', userId);

  return {
    statusCode: 200,
    body: JSON.stringify({})
  };
};

module.exports = {
  handler
};
