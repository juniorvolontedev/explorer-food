import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7.3rem;

  @media (min-width: 1300px) {
    flex-direction: row;
    gap: 30.6rem;
  }
`;
