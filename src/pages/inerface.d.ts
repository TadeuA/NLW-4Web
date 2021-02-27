import { FC, ReactNode } from 'react';

export default interface AppProps {
  Component: ReactNode;
  pageProps: ReactNode;
}

export interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
