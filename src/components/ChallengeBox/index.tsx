import React, { useCallback } from 'react';

import { Container } from './styles';

import { useChallenge, useCountdown } from '../../hooks';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenge();

  const { resetCountdown } = useCountdown();

  const handleChallengeSucceded = useCallback(() => {
    completeChallenge();
    resetCountdown();
  }, [completeChallenge, resetCountdown]);

  const handleChallengeFailed = useCallback(() => {
    resetChallenge();
    resetCountdown();
  }, [resetChallenge, resetCountdown]);
  return (
    <Container active>
      {activeChallenge ? (
        <>
          <div>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
              <img
                src={`icons/${activeChallenge.type}.svg`}
                alt={activeChallenge.type}
              />
              <strong>Novo Desáfio</strong>
              <p>{activeChallenge.description}</p>
            </main>
          </div>
          <footer>
            <button type="button" onClick={handleChallengeFailed}>
              Falhei
            </button>
            <button type="button" onClick={handleChallengeSucceded}>
              Completei
            </button>
          </footer>
        </>
      ) : (
        <div>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <aside>
            <img src="icons/level-up.svg" alt="level Up" />
            <p>Avance de leve completando desáfios.</p>
          </aside>
        </div>
      )}
    </Container>
  );
};

export default ChallengeBox;
