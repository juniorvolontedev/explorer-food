import { Container } from "./styles";
import logo from "../../assets/logo.svg";

export function Brand() {
  return (
    <Container>
      <img
        src={logo}
        alt="Um hexagono azul que representa o logo do Food Explorer"
      />
      <span>food explorer</span>
    </Container>
  );
}
