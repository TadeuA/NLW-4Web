import React from 'react';
import AppProvider from '../hooks';
import AppProps from './inerface';
import { Page } from './styles';

export default function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Page>
        <Component {...pageProps} />
      </Page>
    </AppProvider>
  );
}
