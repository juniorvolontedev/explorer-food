import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: ${({ theme }) => theme.COLORS.DARK_400};
  }

  body, input, textarea, select, ::placeholder {
    font-family: ${({ theme }) => theme.FONTS.PRIMARY};
  }

  button {
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
  }
`;
