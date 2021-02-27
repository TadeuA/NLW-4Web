import React from 'react';
import { Container, Olverlay } from './style';
import { useChallenge } from '../../hooks';

const LevelUpModal: React.FC = () => {
  const { level, setIsLevelModalUp } = useChallenge();
  return (
    <Olverlay>
      <Container>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={() => setIsLevelModalUp(false)}>
          <img src="/icons/close.svg" alt="Frechar" />
        </button>
      </Container>
    </Olverlay>
  );
};

export default LevelUpModal;
