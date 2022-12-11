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

export default function SingIn() {
  const navigation = useNavigation<any>();

  function handleNavigationToRegister() {
    navigation.navigate("Register");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <TextGlobal weight="700" size={39}>
        Login
      </TextGlobal>
      <Form>
        <Title>E-mail institucional</Title>
        <InputText onChangeText={setEmail} />
        <Title>Senha</Title>
        <InputText secureTextEntry={true} onChangeText={setPassword} />
        <NoRegisterText>
          Não possui conta?{" "}
          <LinkText onPress={handleNavigationToRegister}>Registre-se</LinkText>
        </NoRegisterText>
        <Button onPress={() => alert("Funcionando")}>Entrar</Button>
      </Form>
    </Container>
  );
}
