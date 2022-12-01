import React from "react";

import { Container, LogoContainer, ButtonContainer } from "./styles";

import { Logo } from "../../assets/Logo";
import { TextGlobal } from "../../components/Global";
import { Button } from "../../components/Button";

export default function Welcome() {
  return (
    <Container>
      <TextGlobal weight="700" size="39">
        Seja Bem Vindo !
      </TextGlobal>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <ButtonContainer>
        <Button>Entrar</Button>
      </ButtonContainer>
    </Container>
  );
}
