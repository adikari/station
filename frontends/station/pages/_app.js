import React from 'react';
import PropTypes from 'prop-types';
import { getConfig } from 'config/get-config';
import { ErrorBoundary } from 'clients/bugsnag';
import { Auth0Provider } from 'context/auth';

const { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_REDIRECT_URL } = getConfig();

const StationApp = ({ pageProps, Component, router }) => {
  return (
    <ErrorBoundary>
      <Auth0Provider
        domain={AUTH0_DOMAIN}
        client_id={AUTH0_CLIENT_ID}
        redirect_uri={AUTH0_REDIRECT_URL}
      >
        <Component {...router} {...pageProps} />
      </Auth0Provider>
    </ErrorBoundary>
  );
};

StationApp.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.any,
  router: PropTypes.any
};

export default StationApp;
