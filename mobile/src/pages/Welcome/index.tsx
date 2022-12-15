import React from "react";

import { Container, LogoContainer, ButtonContainer } from "./styles";

import { Logo } from "../../assets/Logo";
import { TextGlobal } from "../../components/Global";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation<any>();

  function handleNavigateToSignIn() {
    navigation.navigate("SignIn");
    //alert ('teste');
  }

  return (
    <Container>
      <TextGlobal weight="700" size={39}>
        Seja Bem Vindo !
      </TextGlobal>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ButtonContainer>
        <Button
          backgroundColor="#fff"
          color="#8257e5"
          onPress={handleNavigateToSignIn}
        >
          Entrar
        </Button>
      </ButtonContainer>
    </Container>
  );
}
