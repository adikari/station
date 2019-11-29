import createAuth0Client from '@auth0/auth0-spa-js';
import { getConfig } from 'config/get-config';

const {
  AUTH0_CLIENT_ID,
  AUTH0_AUDIENCE,
  AUTH0_DOMAIN,
  AUTH0_REDIRECT_URL
} = getConfig();

const initOptions = {
  domain: AUTH0_DOMAIN,
  client_id: AUTH0_CLIENT_ID,
  redirect_uri: AUTH0_REDIRECT_URL,
  audience: AUTH0_AUDIENCE
};

let client = null;

const getAuth0Cilent = () => {
  if (!client) {
    client = createAuth0Client(initOptions);
  }

  return client;
};

export { getAuth0Cilent };
