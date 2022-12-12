import { Button } from "../../components/Button";
import { TextGlobal } from "../../components/Global";
import {
  Container,
  Form,
  Title,
  InputText,
  NoRegisterText,
  LinkText,
  ScrollContainer,
  Inputs,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Platform, SafeAreaView } from "react-native";
import { api } from "../../services/api";

export default function Register() {
  const navigation = useNavigation<any>();

  function handleNavigationToLogin() {
    navigation.navigate("SignIn");
  }

  const [name, setName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function fillEmail(e: any) {
    setEnrollment(e);
    setEmail(e);

    if (e.length === 9) {
      setEmail(e + "@aluno.unb.br");
    }
  }

  async function handleRegister() {
    try {
      const response = await api.post("/user", {
        email,
        name,
        enrollment,
        password,
      });

      if (response.status === 201) {
        alert("Usuário criado com sucesso!");
      }
    } catch (error) {
      alert("Erro ao criar usuário!");
    }
  }

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <SafeAreaView>
        <ScrollContainer>
          <Form>
            <TextGlobal weight="700" size={44}>
              Registrar-se
            </TextGlobal>
            <Inputs>
              <Title>Nome Completo</Title>
              <InputText onChangeText={setName} autoComplete="off" />
              <Title>Matrícula</Title>
              <InputText
                keyboardType="number-pad"
                onChangeText={(e) => fillEmail(e)}
              />
              <Title>E-mail institucional</Title>
              <InputText
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                autoCorrect={false}
              />
              <Title>Senha</Title>
              <InputText onChangeText={setPassword} secureTextEntry={true} />
              <NoRegisterText>
                Já Possui Conta?
                <LinkText onPress={handleNavigationToLogin}>
                  {" "}
                  Fazer Login
                </LinkText>
              </NoRegisterText>
            </Inputs>
            <Button onPress={handleRegister}>Entrar</Button>
          </Form>
        </ScrollContainer>
      </SafeAreaView>
    </Container>
  );
}
