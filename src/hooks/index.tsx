import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ProviderProps } from './interfaces';
import { Theme } from '../styles/themes/default';
import GlobalStyles from '../styles/global';
import { ChallengeProvider, useChallenge } from './challenge';
import { CountdownProvider, useCountdown } from './countdown';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default AppProvider;
// hooks
export { useChallenge, useCountdown };
// Provider
export { ChallengeProvider, CountdownProvider };
