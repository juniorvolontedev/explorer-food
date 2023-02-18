import { Container } from "./styles";
import { AuthScreen } from "../../components/AuthScreen";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";

export function SignUp() {
  return (
    <AuthScreen>
      <Brand />

      <Container>
        <h1>Crie sua conta</h1>

        <Input
          label="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
        />

        <Input
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
        />

        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
        />

        <Button label="Criar conta" />

        <TextLink to="/" label="Já tenho uma conta" />
      </Container>
    </AuthScreen>
  );
}
