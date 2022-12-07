import React from "react";
import { Linking } from "react-native";
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

export default function SingIn() {
  return (
    <Container>
      <TextGlobal weight="700" size={39}>
        Login
      </TextGlobal>
      <Form>
        <Title>E-mail institucional</Title>
        <InputText />
        <Title>Senha</Title>
        <InputText />
        <NoRegisterText>
          Não possui conta?{" "}
          <LinkText onPress={() => Linking.openURL("http://google.com")}>
            Registre-se
          </LinkText>
        </NoRegisterText>
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
