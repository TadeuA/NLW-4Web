import React from 'react';

import { Conteiner } from './styles';
import { useChallenge } from '../../hooks';

const Profile: React.FC = () => {
  const { level } = useChallenge();

  return (
    <Conteiner>
      <img src="https://github.com/TadeuA.png" alt="Tadeu Agostini" />
      <div>
        <strong>Tadeu Agostini</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </Conteiner>
  );
};

export default Profile;
