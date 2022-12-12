import React from "react";
import { Button } from "../../components/Button";
import { TextGlobal } from "../../components/Global";
import {
  Container,
  Form,
  Title,
  InputText,
  NoRegisterText,
  LinkText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { api } from "../../services/api";

export default function SingIn() {
  const navigation = useNavigation<any>();

  function handleNavigationToRegister() {
    navigation.navigate("Register");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        alert("Logado com sucesso!");
      }
    } catch (error) {
      alert("Erro ao logar!");
    }
  }

  return (
    <Container>
      <TextGlobal weight="700" size={39}>
        Login
      </TextGlobal>
      <Form>
        <Title>E-mail institucional</Title>
        <InputText onChangeText={setEmail} autoComplete="off" />
        <Title>Senha</Title>
        <InputText secureTextEntry={true} onChangeText={setPassword} />
        <NoRegisterText>
          Não possui conta?{" "}
          <LinkText onPress={handleNavigationToRegister}>Registre-se</LinkText>
        </NoRegisterText>
        <Button onPress={handleLogin}>Entrar</Button>
      </Form>
    </Container>
  );
}
