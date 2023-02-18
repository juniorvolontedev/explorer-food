import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 31.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 0 1.5rem;

  @media (min-width: 540px) {
    max-width: 47.6rem;
    padding: 6.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;
  }

  h1 {
    display: none;

    @media (min-width: 540px) {
      display: block;
      text-align: center;
      font-family: ${({ theme }) => theme.FONTS.SECONDARY};
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;
    }
  }

  a {
    text-align: center;
    transition: all ease 0.4s;

    &:hover {
      opacity: 0.7;
    }
  }
`;
