import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import CommonLayout from 'layouts/CommonLayout';
import { Container } from 'components/container';

const BlankLayout = props => (
  <CommonLayout>
    <StyledLayout>
      <PageBody>
        <Container>{props.children}</Container>
      </PageBody>
    </StyledLayout>
  </CommonLayout>
);

BlankLayout.propTypes = {
  children: PropTypes.node
};

const StyledLayout = styled(Layout)`
  background-color: #090258;
  min-height: 100vh;

  &.ant-layout {
    height: auto;
  }
`;

const PageBody = styled.div`
  flex-grow: 1;
`;

export default BlankLayout;
