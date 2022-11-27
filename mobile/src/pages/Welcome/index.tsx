import React from "react";

import { Container, LogoContainer } from "./styles";

import { Logo } from "../../assets/Logo";
import { Text } from "../../components/Global";

export default function Welcome() {
  return (
    <Container>
      <Text weight="700" size="39">
        Seja Bem Vindo !
      </Text>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </Container>
  );
}
