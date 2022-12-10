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

export default function Register() {
  const navigation = useNavigation<any>();

  function HandleNavigationToLogin() {
    navigation.navigate("SignIn");
  }

  return (
    <Container>
      <TextGlobal weight="700" size={44}>
        Registrar-se
      </TextGlobal>
      <Form>
        <Title>Nome Completo</Title>
        <InputText />
        <Title>Matricula</Title>
        <InputText keyboardType="number-pad" />
        <Title>E-mail institucional</Title>
        <InputText keyboardType="email-address" />
        <Title>Senha</Title>
        <InputText />
        <NoRegisterText>
          Ja Possui Conta?
          <LinkText onPress={HandleNavigationToLogin}> Fazer Login</LinkText>
        </NoRegisterText>
        <Button onPress={() => alert("Funcionando")}>Entrar</Button>
      </Form>
    </Container>
  );
}
