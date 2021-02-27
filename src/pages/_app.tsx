/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import AppProvider from '../hooks';

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
