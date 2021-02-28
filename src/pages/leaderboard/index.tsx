import React from 'react';
import { Container } from './styles';
import { Profile, NavBar } from '../../components';
import Page from '../styles';

const Leaderboard: React.FC = () => {
  return (
    <Page>
      <NavBar />

      <Container>
        <h1>Leaderboard</h1>
        <ul>
          <li className="column" style={{ textAlign: 'center' }}>
            <h5>Posição</h5>
          </li>
          <li className="column">
            <h5 style={{ marginLeft: '1.56rem' }}>Usuário</h5>
          </li>
          <li className="column">
            <h5>Desafios</h5>
          </li>
          <li className="column">
            <h5>Experiência</h5>
          </li>
          {[
            {
              id: 1,
              name: 'Tadeu Agostini',
              image: 'https://github.com/TadeuA.png',
              challengesCompleted: 25,
              experience: 2536,
            },
            {
              id: 1,
              name: 'Tadeu Agostini',
              image: 'https://github.com/TadeuA.png',
              challengesCompleted: 25,
              experience: 2536,
            },
            {
              id: 1,
              name: 'Tadeu Agostini',
              image: 'https://github.com/TadeuA.png',
              challengesCompleted: 25,
              experience: 2536,
            },
            {
              id: 1,
              name: 'Tadeu Agostini',
              image: 'https://github.com/TadeuA.png',
              challengesCompleted: 25,
              experience: 2536,
            },
            {
              id: 1,
              name: 'Tadeu Agostini',
              image: 'https://github.com/TadeuA.png',
              challengesCompleted: 25,
              experience: 2536,
            },
            {
              id: 1,
              name: 'Tadeu Agostini',
              image: 'https://github.com/TadeuA.png',
              challengesCompleted: 25,
              experience: 2536,
            },
            {
              id: 1,
              name: 'Tadeu Agostini',
              image: 'https://github.com/TadeuA.png',
              challengesCompleted: 25,
              experience: 2536,
            },
            {
              id: 1,
              name: 'Tadeu Agostini',
              image: 'https://github.com/TadeuA.png',
              challengesCompleted: 25,
              experience: 2536,
            },
          ].map((item, index) => (
            <>
              <li
                key={item.id}
                style={{
                  marginRight: '0.25rem',
                  justifyContent: 'center',
                }}
              >
                <h2>{index}</h2>
              </li>
              <li>
                <Profile name={item.name} image={item.image} />
              </li>
              <li>
                <p>
                  <strong>{item.challengesCompleted}</strong> completados
                </p>
              </li>
              <li>
                <p>
                  <strong>{item.experience}</strong> xp
                </p>
              </li>
            </>
          ))}
        </ul>
      </Container>
    </Page>
  );
};
export default Leaderboard;
