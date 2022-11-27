import React from "react";
import { Image } from "react-native";

import { AreaDoCelular, Title, AreaImagem, AreaTexto } from "./styles";

import Logo from "../../assets/LogoMidia2.svg";

export default function Welcome() {
  return (
    <AreaDoCelular>

      <AreaImagem>
        <Logo width={120} height={120} />
      </AreaImagem>

      <AreaTexto>
        <Title>Seja Bem-vindo(a) ao Vambora!</Title>
      </AreaTexto>
      
    </AreaDoCelular>
  );
}