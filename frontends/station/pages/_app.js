import React from 'react';
import PropTypes from 'prop-types';

import { ErrorBoundary } from 'clients/bugsnag';

const StationApp = ({ pageProps, Component, router }) => {
  return (
    <ErrorBoundary>
      <Component {...router} {...pageProps} />
    </ErrorBoundary>
  );
};

StationApp.propTypes = {
  pageProps: PropTypes.any,
  Component: PropTypes.any,
  router: PropTypes.any
};

export default StationApp;
