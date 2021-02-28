import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font: ${({ theme }) => theme.fonts['semi-bold']};
    font-size: 2.25rem;
    margin-bottom: 3rem;
  }
  ul {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 4fr 2fr 2fr;
    row-gap: 0.5rem;
    li {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      background: ${({ theme }) => theme.colors.white};
      h2 {
        font: ${({ theme }) => theme.fonts.medium};
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.text};
      }
      p {
        font: ${({ theme }) => theme.fonts.medium};
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.text};
        strong {
          color: ${({ theme }) => theme.colors['blue-twitter']};
        }
      }
      div {
        margin-left: 1.56rem;
        img {
          width: 4rem;
          height: 4rem;
        }
        div {
          p {
            img {
              width: 0.875rem;
              height: 1rem;
            }
          }
        }
      }
      &.column {
        border: none;
        background: none;
        display: block;
        h5 {
          font: ${({ theme }) => theme.fonts.bold};
          font-size: 0.825rem;
        }
      }
    }
  }
`;
export default Container;
