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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "../../components/Modal";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState("Erro");
  const [errorMessage, setErrorMessage] = useState("");

  const navigation = useNavigation<any>();

  function handleNavigationToRegister() {
    navigation.navigate("Register");
  }

  async function handleLogin() {
    if (!email || !password) {
      setErrorMessage("Preencha todos os campos!");
      setIsErrorModalOpen(true);
      return;
    }

    setIsLoading(true);
    setIsButtonDisabled(true);

    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });

      const user = {
        id: response.data.user.id,
        email: response.data.user.email,
        token: response.data.token,
      };

      await AsyncStorage.setItem("@vambora:user", JSON.stringify(user));

      if (!response.data.user.isVerified) {
        setErrorMessage("Verifique sua conta para continuar!");
        setIsErrorModalOpen(true);
        navigation.navigate("VerificationCode");
        return;
      }

      navigation.navigate("FirstRoute");
    } catch (error) {
      if (error.response.data.message === "Verify your account to continue") {
        setErrorMessage("Verifique sua conta para continuar!");
        setIsErrorModalOpen(true);
        navigation.navigate("VerificationCode");
      } else if (error.response.data.message === "Invalid credentials") {
        setErrorMessage("E-mail ou senha inválidos!");
        setIsErrorModalOpen(true);
      }
    }

    setIsLoading(false);
    setIsButtonDisabled(false);
  }

  return (
    <Container>
      {isErrorModalOpen && (
        <Modal
          setIsErrorModalOpen={setIsErrorModalOpen}
          title={errorTitle}
          description={errorMessage}
        />
      )}
      <TextGlobal weight="700" size={39}>
        Login
      </TextGlobal>
      <Form>
        <Title>E-mail institucional</Title>
        <InputText
          onChangeText={setEmail}
          autoComplete="off"
          autoCorrect={false}
        />
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
            "Entrar"
          )}
        </Button>
      </Form>
    </Container>
  );
}
