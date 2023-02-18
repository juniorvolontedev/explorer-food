import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";
import { AuthScreen } from "../../components/AuthScreen";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark";
import { api } from "../../services/api";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSingIn(e) {
    e.preventDefault();

    if (!email || !password) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Os campos email e senha são obrigatórios.",
      });
    }

    signIn({ email, password });
  }

  return (
    <AuthScreen>
      <Brand />

      <Container onSubmit={handleSingIn}>
        <h1>Faça Login</h1>

        <Input
          label="Email"
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" label="Entrar" />

        <TextLink to="/register" label="Criar uma conta" />
      </Container>
    </AuthScreen>
  );
}
