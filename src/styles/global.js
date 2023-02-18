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

  .swal2-popup {
    font-size: 1.6rem;
  }

  .swal2-styled.swal2-confirm {
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  .swal2-styled.swal2-confirm:focus {
    box-shadow: 0 0 0 3px #dc374159;
  }
`;
