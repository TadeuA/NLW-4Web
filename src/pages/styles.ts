import styled, { css } from 'styled-components';

export const Page = styled.div`
  height: 100vh;
  max-width: 922px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`;

export const Container = styled.section`
  background: ${({ theme }) => theme.colors['blue-twitter']};

  background: linear-gradient(
      184deg,
      rgba(73, 83, 184, 1) 0% rgba(73, 83, 184, 0.2) 100%
    )
    no-repeat content;

  ${Page} {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
    aside {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        position: absolute;
        left: -4.5%;
      }
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      height: 26.4rem;

      img {
        width: 22.5rem;
        height: 4.75rem;
      }
      h1 {
        font: ${({ theme }) => theme.fonts['semi-bold']};
        font-size: 2.1rem;
        color: ${({ theme }) => theme.colors.white};
      }
      p {
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.colors['blue-text']};
        font: ${({ theme }) => theme.fonts.medium};
        img {
          width: 2.5rem;
          height: 2.5rem;
          margin-right: 1rem;
        }
      }
    }
  }
`;

export default Page;
