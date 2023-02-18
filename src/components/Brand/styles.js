import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 700;
  font-size: 3.7rem;
  line-height: 4.4rem;

  @media (min-width: 1300px) {
    font-size: 4.2rem;
    line-height: 4.9rem;
    gap: 1.9rem;
  }

  img {
    @media (min-width: 1300px) {
      width: 4.9rem;
      height: auto;
    }
  }
`;
