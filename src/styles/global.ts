import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
    background:${({ theme }) => theme.colors.background};
    font:${({ theme }) => theme.fonts.regular};
    color:${({ theme }) => theme.colors.text};
    padding-top:2rem;
  }

  button{
    font: ${({ theme }) => theme.fonts['semi-bold']};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
  }
  input{
    font: ${({ theme }) => theme.fonts.medium};
  }
  h1,h2,h3,h4,h5,h6{
    color: ${({ theme }) => theme.colors.title}
  }
  a{
    color:inherit;
    text-decoration: none;
  }

 
  @media(max-width:1080px){
    html{
      font-size: 93.75%
    }
  }
  @media(max-width:720px){
    html{
      font-size: 87.5%
    }
  }
`;
