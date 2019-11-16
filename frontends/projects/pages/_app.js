import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { RouteProgress } from 'components/nprogress';
import 'styles/styles.less';

export default class ProjectsApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = { query: null };
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // Expose the query
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <RouteProgress>
        <Head>
          <title>Project</title>
        </Head>
        <Component {...pageProps} />
      </RouteProgress>
    );
  }
}
