import '../styles/globals.css';
import React from 'react';
import { Provider } from 'react-redux';
import Layout from '../componentes/Layout';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
