import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
