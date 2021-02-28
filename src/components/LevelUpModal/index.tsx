import React from 'react';
import { FiX } from 'react-icons/fi';
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
          <FiX size="0.875rem" />
        </button>
      </Container>
    </Olverlay>
  );
};

export default LevelUpModal;
