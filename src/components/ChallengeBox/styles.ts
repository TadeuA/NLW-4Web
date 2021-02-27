import styled, {css} from 'styled-components'

interface ContainerProps{
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  height:100%;
  border-radius: 5px;
  box-shadow:${({ theme }) => theme.shadows.clock};
  background: ${({ theme }) => theme.colors.white};
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  div{
   
      height:100%;

      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content:center;
      strong{
        font: ${({ theme }) => theme.fonts.medium};
        font-size: 1.5rem;
        line-height: 1.4;
      }

      header{
        color: ${({ theme }) => theme.colors['blue-twitter']};
        font: ${({ theme }) => theme.fonts['semi-bold']};
        font-size: 1.25rem;
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid ${({ theme})=> theme.colors['gray-line']};
        width:100%;
      }
      main{
        flex:100%;
        display:flex; 
        flex-direction:column;
        align-items: center;
        justify-content: center;

        strong{
          font: ${({ theme }) => theme.fonts['semi-bold']};
          font-weight: 2rem;
          color: ${({ theme }) => theme.colors.title};
          margin: 1.5rem 0 1rem;
        }
        p{
          line-height:1.5;
        }
      }
      footer{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap:1rem;
      }
      aside{
        margin-top:3rem;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        p{
        line-height: 1.4;
        max-width:60%;
        text-align:left;
        margin-top: 1.5rem;
        margin-left:2rem;
        
      }
      img{
          width:2rem;
          height:3rem;
          position: relative;
         
        }
    }

  }

`