import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.clock};
  text-align: center;
  position: relative;

  header {
    font: ${({ theme }) => theme.fonts['semi-bold']};
    font-size: 8.75rem;
    color: ${({ theme }) => theme.colors['blue-twitter']};
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 0.5rem;
  }

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background: transparent;
    border: 0;
  }
`;

export const Olverlay = styled.div`
  background: ${({ theme }) => theme.colors['gray-background-opaque']};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;
