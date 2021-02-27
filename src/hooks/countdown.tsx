import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { ProviderProps, CountdownContextDate } from './interfaces';
import { useChallenge } from './index';

const CountdownContext = createContext({} as CountdownContextDate);
let countdownTimeout: NodeJS.Timeout;

export const CountdownProvider: React.FC = ({ children }: ProviderProps) => {
  const { startNewChallenge } = useChallenge();

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, [setIsActive]);

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }, [setIsActive]);

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, setHasFinished, setIsActive, startNewChallenge]);

  return (
    <CountdownContext.Provider
      value={{
        isActive,
        hasFinished,
        minutes,
        seconds,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export function useCountdown(): CountdownContextDate {
  const context = useContext(CountdownContext);

  if (!context) {
    throw new Error('useCountdown must be used within an CountdownProvider!');
  }
  return context;
}
