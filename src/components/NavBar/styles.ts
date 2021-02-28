import styled, { css } from 'styled-components';

import { LinkStylesProps } from './interface';

export const Container = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 7rem;
  ${({ theme }) => css`
    background: ${theme.colors.white};
    background: linear-gradient(180deg, ${theme.colors['background-nav']});
  `}
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    top: 4%;
    width: 3rem;
    height: 2.62rem;
  }
  a {
    + a {
      margin-top: 1.12rem;
    }
  }
`;

export const A = styled.a<LinkStylesProps>`
  padding: 0.75rem 2.3rem;
  border-left: 0.3rem solid transparent;

  transition: border-color 0.2s;

  svg {
    size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.2s;
  }
  ${({ inRoute }) =>
    inRoute &&
    css`
      border-left: 0.3rem solid ${({ theme }) => theme.colors['blue-twitter']};

      svg {
        size: 2rem;
        color: ${({ theme }) => theme.colors['blue-twitter']};
      }
    `}
`;
