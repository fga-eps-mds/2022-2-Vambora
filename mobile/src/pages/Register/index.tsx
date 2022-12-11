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

export default function Register() {
  const navigation = useNavigation<any>();

  function HandleNavigationToLogin() {
    navigation.navigate("SignIn");
  }

  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  return (
    <Container>
      <TextGlobal weight="700" size={44}>
        Registrar-se
      </TextGlobal>
      <Form>
        <Title>Nome Completo</Title>
        <InputText onChangeText={setName} />
        <Title>Matricula</Title>
        <InputText keyboardType="number-pad" onChangeText={setRegistration} />
        <Title>E-mail institucional</Title>
        <InputText
          keyboardType="email-address"
          onChangeText={setRegisterEmail}
        />
        <Title>Senha</Title>
        <InputText onChangeText={setRegisterPassword} secureTextEntry={true} />
        <NoRegisterText>
          Ja Possui Conta?
          <LinkText onPress={HandleNavigationToLogin}> Fazer Login</LinkText>
        </NoRegisterText>
        <Button onPress={() => alert("Funcionando")}>Entrar</Button>
      </Form>
    </Container>
  );
}
