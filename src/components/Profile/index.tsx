import React from 'react';
import { ProfileProps } from './interface';
import { Container } from './styles';
import { useChallenge } from '../../hooks';

const Profile: React.FC<ProfileProps> = ({ name, image }: ProfileProps) => {
  const { level } = useChallenge();

  return (
    <Container>
      <img src={image} alt={name} />
      <div>
        <strong>{name}</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
