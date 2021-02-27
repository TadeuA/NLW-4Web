import { ReactNode } from 'react';

export interface ProviderProps {
  children: ReactNode;
}
export interface ChallengeProviderProps extends ProviderProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface ChallengeProps {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

export interface ChallengeContextDate {
  levelUp: () => void;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  startNewChallenge: () => void;
  activeChallenge: ChallengeProps;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  completeChallenge: () => void;
  setIsLevelModalUp: (boolean: boolean) => void;
}

export interface CountdownContextDate {
  isActive: boolean;
  hasFinished: boolean;
  minutes: number;
  seconds: number;
  startCountdown: () => void;
  resetCountdown: () => void;
}
