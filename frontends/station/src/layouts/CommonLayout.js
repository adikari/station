import 'antd/dist/antd.less';

import React from 'react';
import styled from 'styled-components';
import NProgress from 'nprogress';
import { Router } from 'next/router';
import PropTypes from 'prop-types';
import { Layout, Spin } from 'antd';

NProgress.configure({ parent: 'body', showSpinner: false });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

Spin.setDefaultIndicator(<Spin />);

const CommonLayout = props => <StyledLayout>{props.children}</StyledLayout>;

CommonLayout.propTypes = {
  children: PropTypes.node
};

const StyledLayout = styled(Layout)`
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  // color: black;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    // font-family: somefont;
  }
`;

export default CommonLayout;
