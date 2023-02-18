import { Container } from "./styles";

export function Button({ label, ...rest }) {
  return (
    <Container>
      <button {...rest}>{label}</button>
    </Container>
  );
}
