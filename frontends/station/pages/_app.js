import React from 'react';
import PropTypes from 'prop-types';
import { ErrorBoundary } from 'clients/bugsnag';
import { Auth0Provider } from 'context/auth';

const StationApp = ({ pageProps, Component, router }) => {
  return (
    <ErrorBoundary>
      <Auth0Provider>
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
