import styled, { css, keyframes } from 'styled-components';
import DefaultButton from '../atoms/DefaultButton';
import { ButtonStyleProps } from './interface';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.fonts.number};
  color: ${({ theme }) => theme.colors.title};

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.clock};
    border-radius: 5px;
    text-align: center;
    span {
      margin: 0;
      flex: 1;
      + span {
        border-left: 1px solid
          ${({ theme }) => theme.colors['border-number-clock']};
      }
    }
  }
  span {
    margin: 0 0.5rem;
  }
`;
const timer = keyframes`
  from {max-width:98%;}
  to {max-width: 0%;}
}`;
export const Button = styled(DefaultButton)<ButtonStyleProps>`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  font-size: 1.25rem;

  ${({ disabled, color, time }) =>
    disabled
      ? css`
          position: relative;
          z-index: 2;
          + div {
            height: 0.5rem;
            width: 98%;
            position: relative;
            z-index: 1;

            background: ${({ theme }) => theme.colors.green};
            top: -0.2%;
            left: 1%;
            border-bottom-left-radius: 70px;
            border-bottom-right-radius: 70px;
            border-top: 0.5rem;
          }
          svg {
            color: ${({ theme }) => theme.colors.green}!important;
          }
        `
      : color === 'white' &&
        css`
          + div {
            height: 0.5rem;
            position: relative;
            z-index: 1;

            background: ${({ theme }) => theme.colors.green};
            top: -0.2%;
            left: 1%;
            border-bottom-left-radius: 70px;
            border-bottom-right-radius: 70px;
            border-top: 0.5rem;
            animation: ${timer} ${`${time}s`} linear;
          }
          svg {
            color: ${({ theme }) => theme.colors.title};
            transition: color 0.2s;
          }
          &:hover {
            svg {
              color: ${({ theme }) => theme.colors.white}!important;
            }
          }
        `}
`;
