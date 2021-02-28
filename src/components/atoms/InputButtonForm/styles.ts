import styled, { css } from 'styled-components';
import { StyledProps } from './interface';

export const Container = styled.form<StyledProps>`
  display: flex;
  align-items: center;

  input {
    background: transparent;
    color: ${({ theme }) => theme.colors['blue-text']};
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors['blue-dark']};
    background: ${({ theme }) => `linear-gradient(
            90deg,
            ${theme.colors['background-gradient']})
            no-repeat content`};
    margin-right: 0.06rem;
    height: 5rem;
    width: 21.25rem;
    border: 0.12rem solid transparent;

    &:hover {
      border: 0.12rem solid ${({ theme }) => theme.colors['border-blue']};
    }
  }
  button {
    border-radius: 0 5px 5px 0;
    border: none;
    background: ${({ theme }) => theme.colors['blue-dark']};
    width: 5rem;
    height: 5rem;
    img {
      width: 1.5rem !important;
      height: 1.5rem !important;
    }
  }
  ${({ theme, isFocus }) =>
    isFocus &&
    css`
      input {
        border: 0.06rem solid ${theme.colors['border-blue']};
      }
    `}
  ${({ theme, isFilled }) =>
    isFilled &&
    css`
      input {
        border: 0.12rem solid ${theme.colors['border-blue']};
      }
      button {
        background: ${theme.colors.green};
      }
    `}
`;
