import React from 'react';
import PropTypes from 'prop-types';

import withApollo from 'hocs/apollo';
import BlankLayout from 'layouts/BlankLayout';

const SingleProjectPage = ({ query }) => {
  const { projectId } = query;

  return (
    <BlankLayout>
      <p>Project with id: ${projectId}</p>
    </BlankLayout>
  );
};

SingleProjectPage.propTypes = {
  query: PropTypes.exact({ projectId: PropTypes.string })
};

export default withApollo(SingleProjectPage);
