import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  label {
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input {
    background: ${({ theme }) => theme.COLORS.DARK_900};
    padding: 1.2rem;
    border-radius: 0.8rem;
    height: 4.8rem;
    width: 100%;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 100%;
    }
  }
`;
