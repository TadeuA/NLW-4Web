import styled, {css} from 'styled-components'
import DefaultButton from '../atoms/DefaultButton'
export const Container = styled.div`
  display: flex;
  align-items: center;
  font: ${({ theme }) => theme.fonts.number};
  color: ${({ theme }) => theme.colors.title};

  div{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:space-evenly;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.clock};
    border-radius: 5px;
    text-align:center;
    span{
      margin: 0;
      flex:1;
      + span{
        border-left: 1px solid ${({theme})=> theme.colors['border-number-clock']};
      }
    }
  }
  span{
    margin: 0 0.5rem;
  }
`

export const Button = styled(DefaultButton)`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  font-size:1.25rem;
  
  svg{
    size: 1.25rem;
  }
  ${({color, disabled}) => disabled ? css`
    position:relative;
    z-index:2;
    + div{
      height: 0.2rem;
      width: 98%;
      position: relative;
      z-index:1;
      
      background:${({ theme }) => theme.colors.green};
      top: -0.2%;
      left: 1%;
      border-bottom-left-radius: 70px;
      border-bottom-right-radius: 70px;
      border-top: 0.5rem;
    }
    &::after{
      content:'';
      display: inline-block;
      vertical-align: middle;
      border-left: 0.15rem solid;
      height:0.1rem;
      width:0.4rem;
      border-top: 0.1rem solid transparent;
      border-bottom: 0.14rem solid  ${({ theme})=> theme.colors.white};
      border-left: 0.14rem solid ${({ theme})=> theme.colors.white};
      transform:  rotate(-45deg);
      margin-left: 1rem;
      
    }
    &::before{
      content:'';
      display: inline-block;
      vertical-align: middle;
      height:0.9rem;
      width:0.9rem;
      border-radius:50%;
      background: ${({ theme }) => theme.colors.green};
      transform: translate(11.25rem, 0.08rem);

    }
    `:color === 'blue' || !color ? css`
      div{}
      &::after{
        content:'';
        display: inline-block;
        vertical-align: middle;
        margin-left: 1rem;
        width: 0; 
        height: 0; 

        border-top: 0.4rem solid transparent;
        border-bottom: 0.4rem solid transparent;
        border-left: 0.5rem solid ${({ theme})=> theme.colors.white};
      }`
      : color === 'white' && css`
        &::after{
          content:'';
          display: inline-block;
          vertical-align: middle;
          border-left: 0.15rem solid;
          height:0.9rem;
          margin-left: 1rem;
          transform: rotate(45deg);
         
        }
        &::before{
            content:'';
            display: inline-block;
            vertical-align: middle;
            border-left: 0.15rem solid;
            height:0.9rem;
            transform: translateX(11.18rem) rotate(-45deg);

         }`
  }
`;