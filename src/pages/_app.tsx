import React from 'react';
import AppProvider from '../hooks';
import AppProps from './inerface';
import { Page } from './styles';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Page>
      <Component {...pageProps} />
    </Page>
  </AppProvider>
);

export default MyApp;
