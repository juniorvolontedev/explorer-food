import styled from "styled-components";

export const Container = styled.div`
  > button {
    display: block;
    width: 100%;
    height: 4.8rem;
    border: none;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    cursor: pointer;
    transition: all ease 0.4s;

    &:hover {
      background: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
  }
`;
