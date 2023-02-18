import { Container } from "./styles";

export function Input({ label, type, ...rest }) {
  return (
    <Container>
      <label>{label}</label>
      <input type={type} {...rest} />
    </Container>
  );
}
