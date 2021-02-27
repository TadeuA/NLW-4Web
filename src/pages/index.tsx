import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { HomeProps } from './inerface';
import { CountdownProvider, ChallengeProvider } from '../hooks';
import {
  ExperienceBar,
  Profile,
  CompleteChallenges,
  Countdown,
  ChallengeBox,
} from '../components';
import { Container } from './styles';

const Home: React.FC<HomeProps> = ({
  level,
  currentExperience,
  challengesCompleted,
}: HomeProps) => {
  return (
    <ChallengeProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <Container>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </Container>
      </CountdownProvider>
    </ChallengeProvider>
  );
};
export default Home;
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
