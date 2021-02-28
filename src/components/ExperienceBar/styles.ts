import styled from 'styled-components';
import { StylesProps } from './interface';

export const Container = styled.header<StylesProps>`
  display: flex;
  align-items: center;
  margin-bottom:1.5rem;
  >span{
    margin-right:10px;
  }
  > div {
    + span{
      margin-left: 10px;
    }

    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors['gray-line']};
    margin: 0.1.5rem;
    position: relative;
    > div {
      height: 4px;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.green};
      width: ${({ experience }) => experience}%;

      }
    > span{
      position: absolute;
      top:12px;
      left: ${({ experience }) => experience}%;
      transform: translateX(-50%);
      }
    }
  }
`;
