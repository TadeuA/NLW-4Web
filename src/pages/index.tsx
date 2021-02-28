import React, { useCallback } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Container, Page } from './styles';
import InputButtonForm from '../components/atoms/InputButtonForm';

export default function App() {
  const router = useRouter();
  const handleLogin = useCallback(async () => {
    // try {
    //   const response = await axios.get(
    //     'https://github.com/login/oauth/authorize',
    //   );
    //   console.log(response);
    // } catch (err) {
    //   console.log(err);
    // }
    router.push('/home');
  }, [router]);
  return (
    <Container>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <Page>
        <aside>
          <img src="/images/logo.png" alt="Move.it" />
        </aside>
        <main>
          <img src="/logotype.svg" alt="Move.it" />
          <h1>Bem-vindo</h1>
          <p>
            <img src="/icons/github.svg" alt="GitHub" />
            Faça login com seu Github para começar
          </p>
          <InputButtonForm name="credencial" onSubmit={handleLogin} />
        </main>
      </Page>
    </Container>
  );
}
