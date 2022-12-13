import { TextGlobal } from "../../components/Global";
import { Container, ScrollContainer, Form,  InputText } from "./styles";
import { Button } from "../../components/Button";

import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Platform, SafeAreaView } from "react-native";

export default function RegisterCode() {
  const navigation = useNavigation<any>();
  const [code, setCode] = useState("");

  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <Form>
            <TextGlobal weight="700" size ={45}>Código</TextGlobal>
            <InputText onChangeText={setCode} />
            <Button onPress={() => (alert("Temp"))}>Entrar</Button>
          </Form>
    </Container>
  );
}
