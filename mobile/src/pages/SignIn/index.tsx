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
import { ActivityIndicator } from "react-native";

export default function SingIn() {
  const navigation = useNavigation<any>();

  function handleNavigationToRegister() {
    navigation.navigate("Register");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  async function handleLogin() {
    setIsLoading(true);
    setIsButtonDisabled(true);

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

    setIsLoading(false);
    setIsButtonDisabled(false);
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
        <Button disabled={isButtonDisabled} onPress={handleLogin}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </Form>
    </Container>
  );
}
