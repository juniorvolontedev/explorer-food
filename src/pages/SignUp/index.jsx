import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { AuthScreen } from "../../components/AuthScreen";
import { Brand } from "../../components/Brand";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";
import Swal from "sweetalert2";
import "@sweetalert2/theme-dark";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Os campos nome, email e senha são obrigatórios.",
      });
    }

    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Digite um e-mail válido.",
      });
    }

    if (password && password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "A senha precisa ter no minimo 6 caracteres.",
      });
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Bem-vindo(a)",
          text: "Usuário cadastrado com sucesso.",
        });

        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Não foi possível cadastrar, tente novamente mais tarde",
          });
        }
      });
  }

  return (
    <AuthScreen>
      <Brand />

      <Container onSubmit={handleSignUp}>
        <h1>Crie sua conta</h1>

        <Input
          label="Seu nome"
          type="text"
          placeholder="Exemplo: Maria da Silva"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" label="Criar conta" />

        <TextLink to="/" label="Já tenho uma conta" />
      </Container>
    </AuthScreen>
  );
}
