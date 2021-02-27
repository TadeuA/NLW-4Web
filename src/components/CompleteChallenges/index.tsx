import React from 'react';

import { Container } from './styles';
import { useChallenge } from '../../hooks';

const CompleteChallenges: React.FC = () => {
  const { challengesCompleted } = useChallenge();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompleteChallenges;
