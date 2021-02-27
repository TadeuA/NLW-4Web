import styled from 'styled-components';

export const Page = styled.div`
  height:100vh;
  max-width: 922px;
  margin:0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`

export const Container = styled.section`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  align-content: center;
`