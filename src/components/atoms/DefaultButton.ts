import styled, { css } from 'styled-components';

interface ButtonProps {
  color?: string;
}
const colors = {
  blue: css`
    background: ${({ theme }) => theme.colors['blue-twitter']};
    color: ${({ theme }) => theme.colors.white};
    svg {
      color: ${({ theme }) => theme.colors.white};
    }
    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors['blue-dark']};
    }
  `,
  white: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.title};

    svg {
      color: ${({ theme }) => theme.colors.title};
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
    }
    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  `,
  red: css`
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    svg {
      color: ${({ theme }) => theme.colors.white};
    }
    &:not(:disabled):hover {
      filter: brightness(0.9);
    }
  `,
  green: css`
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    svg {
      color: ${({ theme }) => theme.colors.white};
    }
    &:not(:disabled):hover {
      filter: brightness(0.9);
    }
  `,
};

const DefaultButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  transition-property: background-color filter;
  transition-duration: 0.2s;
  padding: 1rem 3.5rem;
  font: ${({ theme }) => theme.fonts['semi-bold']};
  ${({ color }) => (color ? colors[color] : colors.blue)};
  svg {
    margin-left: 1rem;
  }
  &:disabled {
    ${colors.white};
    cursor: not-allowed;
    svg {
      color: ${({ theme }) => theme.colors.green}!important;
    }
  }
`;

export default DefaultButton;
