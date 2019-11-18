import * as React from 'react';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';

import { getConfig } from 'config/get-config';

const { BUGSNAG_API_KEY } = getConfig();

const bugsnagClient = bugsnag({
  apiKey: BUGSNAG_API_KEY,
  releaseStage: process.env.STAGE
});

bugsnagClient.use(bugsnagReact, React);

const ErrorBoundary = bugsnagClient.getPlugin('react');

export { bugsnagClient, ErrorBoundary };
