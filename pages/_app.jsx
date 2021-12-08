import '../styles/globals.css';
import React from 'react';
import Layout from '../componentes/Layout';

const MyApp = function ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
