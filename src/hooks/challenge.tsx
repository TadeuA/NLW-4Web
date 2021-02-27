import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import Cookies from 'js-cookie';
import { ChallengeProviderProps, ChallengeContextDate } from './interfaces';
import challenges from '../../mocks/challenges.json';
import { LevelUpModal } from '../components';

const ChallengeContext = createContext({} as ChallengeContextDate);

export function ChallengeProvider({
  children,
  ...rest
}: ChallengeProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelModalUp] = useState(false);
  const experienceToNextLevel = ((level + 1) * 4) ** 2;

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengesCompleted', String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
    setIsLevelModalUp(true);
  }, [setLevel, level]);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉 ', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }
  }, [setActiveChallenge]);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, [setActiveChallenge]);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) return;

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    experienceToNextLevel,
    challengesCompleted,
    activeChallenge,
    currentExperience,
    levelUp,
    setCurrentExperience,
    setChallengesCompleted,
    setActiveChallenge,
  ]);

  return (
    <ChallengeContext.Provider
      value={{
        levelUp,
        level,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        setIsLevelModalUp,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  );
}

export function useChallenge(): ChallengeContextDate {
  const context = useContext(ChallengeContext);

  if (!context) {
    throw new Error('useChallenge must be used within an ChallengeProvider!');
  }
  return context;
}
