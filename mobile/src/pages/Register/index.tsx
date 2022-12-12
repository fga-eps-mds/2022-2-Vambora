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
  LoadingContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, Platform, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function fillEmail(e: any) {
    setEnrollment(e);
    setEmail(e);

    if (e.length === 9) {
      setEmail(e + "@aluno.unb.br");
    }
  }

  async function handleRegister() {
    setIsLoading(true);
    setIsButtonDisabled(true);

    try {
      const response = await api.post("/user", {
        email,
        name,
        enrollment,
        password,
      });

      if (response.status === 201) {
        await AsyncStorage.setItem("@vambora:id", response.data.id);
      }
    } catch (error) {
      alert("Erro ao criar usuário!");
    }

    setIsLoading(false);
    setIsButtonDisabled(false);
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
              <InputText
                onChangeText={setName}
                autoComplete="off"
                autoCorrect={false}
              />
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
            <Button disabled={isButtonDisabled} onPress={handleRegister}>
              {isLoading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                "Cadastrar"
              )}
            </Button>
          </Form>
        </ScrollContainer>
      </SafeAreaView>
    </Container>
  );
}
