import React from 'react';

import { FiX } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';
import { Container, Button } from './styles';
import { useCountdown } from '../../hooks';

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown,
    time,
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
          <Button disabled>
            Ciclo Finalizado
            <MdCheckCircle size="1.25rem" />
          </Button>
          <div />
        </>
      ) : isActive ? (
        <>
          <Button time={time} onClick={resetCountdown} color="white">
            Abandonar Ciclo
            <FiX size="1.25rem" />
          </Button>
          <div />
        </>
      ) : (
        <Button onClick={startCountdown}>
          Iniciar Ciclo
          <FaPlay size="0.875rem" />
        </Button>
      )}
    </>
  );
};

export default Countdown;
