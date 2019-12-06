module.exports = {
  service: {
    endpoint: {
      url: process.env.GRAPHQL_ENDPOINT,
      headers: {
        'x-api-key': process.env.SERVICE_API_KEY
      }
    }
  }
};
