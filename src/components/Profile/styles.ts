import styled from 'styled-components'

export const Conteiner = styled.div`
  display: flex;
  align-items: center;

  > img{
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div{
    margin-left: 1.5rem;

    strong{
      font:${({theme})=> theme.fonts['semi-bold']};
      font-size:1.5rem;
      color: ${({ theme }) => theme.colors.title};
    }

    p{
      margin-top: 0.5rem;
      img{
        margin-right: 0.5rem;
      }
    }
  }


`