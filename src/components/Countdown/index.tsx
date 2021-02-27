import React, { useState, useCallback, useEffect } from 'react';

import { Container, Button } from './styles';
import { useCountdown } from '../../hooks';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
  } = useCountdown();
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');
  return (
    <>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>
      {hasFinished ? (
        <>
          <Button disabled>Ciclo Finalizado</Button>
          <div />
        </>
      ) : isActive ? (
        <Button onClick={resetCountdown} color="white">
          Abandonar Ciclo
        </Button>
      ) : (
        <Button onClick={startCountdown}>Iniciar Ciclo</Button>
      )}
    </>
  );
};

export default Countdown;
