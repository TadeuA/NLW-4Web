/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import HomeProps from '../../@types/interface';
import { CountdownProvider, ChallengeProvider } from '../../hooks';
import {
  ExperienceBar,
  Profile,
  CompleteChallenges,
  Countdown,
  ChallengeBox,
  NavBar,
} from '../../components';
import { Container } from './styles';
import Page from '../styles';

export default function Home(props: HomeProps) {
  const { level, currentExperience, challengesCompleted } = props;
  return (
    <>
      <ChallengeProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <NavBar />

        <Page>
          <Head>
            <title>Inicio | move.it</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider>
            <Container>
              <div>
                <Profile
                  name="Tadeu Agostini"
                  image="https://github.com/TadeuA.png"
                />
                <CompleteChallenges />
                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </Container>
          </CountdownProvider>
        </Page>
      </ChallengeProvider>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async context => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
