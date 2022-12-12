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
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  View,
} from "react-native";

export default function Register() {
  const navigation = useNavigation<any>();

  function HandleNavigationToLogin() {
    navigation.navigate("SignIn");
  }

  const [name, setName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [email, setEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  function fillEmail(e: any) {
    setEnrollment(e);
    setEmail(e);

    if (e.length === 9) {
      setEmail(e + "@aluno.unb.br");
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
              <InputText onChangeText={setName} />
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
              <InputText
                onChangeText={setRegisterPassword}
                secureTextEntry={true}
              />
              <NoRegisterText>
                Já Possui Conta?
                <LinkText onPress={HandleNavigationToLogin}>
                  {" "}
                  Fazer Login
                </LinkText>
              </NoRegisterText>
            </Inputs>
            <Button onPress={() => alert("Funcionando")}>Entrar</Button>
          </Form>
        </ScrollContainer>
      </SafeAreaView>
    </Container>
  );
}
