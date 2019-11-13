import React from 'react';

export default class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;

    return <>{statusCode && statusCode === 404 ? <div>Not Found</div> : <div>Error</div>}</>;
  }
}
