import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  CloseButton,
  CloseButtonTitle,
  Container,
  Description,
  ModalContainer,
  Title,
} from "./styles";

interface ModalProps {
  title: string;
  description: string;
  setIsErrorModalOpen: (value: boolean) => void;
}

export function Modal({ title, description, setIsErrorModalOpen }: ModalProps) {
  return (
    <Container>
      <ModalContainer>
        <Title> {title} </Title>
        <Description> {description} </Description>
        <CloseButton onPress={() => setIsErrorModalOpen(false)}>
          <CloseButtonTitle>Fechar</CloseButtonTitle>
        </CloseButton>
      </ModalContainer>
    </Container>
  );
}
