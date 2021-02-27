import React from 'react';

import { Container } from './styles';
import { useChallenge } from '../../hooks';

const ExperienceBar: React.FC = () => {
  const { experienceToNextLevel, currentExperience } = useChallenge();
  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;
  return (
    <Container experience={percentToNextLevel}>
      <span>0 xp</span>
      <div>
        <div />
        <span>{`${currentExperience} xp`}</span>
      </div>
      <span>{`${experienceToNextLevel} xp`}</span>
    </Container>
  );
};

export default ExperienceBar;
