import { useState } from "react";
import { ViewProps } from "react-native";
import { TextGlobal } from "../Global";
import { Container } from "./styles";

interface ButtonProps extends ViewProps {
  children: string;
  onPress: () => void | string;
}

export function Button({ children, onPress }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      <TextGlobal weight="700" color="#ffffff" size={25}>
        {children}
      </TextGlobal>
    </Container>
  );
}
