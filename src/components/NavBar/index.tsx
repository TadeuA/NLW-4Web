import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHome, FiAward } from 'react-icons/fi';
import { Container, A } from './styles';

const NavBar: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <img src="/icons/logo.svg" alt="Move it" />
      <Link href="/home">
        <A inRoute={router.pathname === '/home'}>
          <FiHome size="2rem" />
        </A>
      </Link>
      <Link href="/leaderboard">
        <A inRoute={router.pathname === '/leaderboard'}>
          <FiAward size="2rem" />
        </A>
      </Link>
    </Container>
  );
};
export default NavBar;
