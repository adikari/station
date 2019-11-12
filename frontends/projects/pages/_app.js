import App, { Container } from 'next/app';
import Head from 'next/head';

export default class ProjectsApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <Head>
          <title>Projects</title>
        </Head>
        <Component {...pageProps} router={router} />
      </Container>
    );
  }
}
