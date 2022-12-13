import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useRef, useState } from "react";
import { Button } from "../../components/Button";
import { TextGlobal } from "../../components/Global";
import { api } from "../../services/api";

import { Container, Input, InputContainer } from "./styles";

export function VerificationCode() {
  const [verificationCode, setVerificationCode] = useState<string>("");

  const input_1 = useRef(null);
  const input_2 = useRef(null);
  const input_3 = useRef(null);
  const input_4 = useRef(null);
  const input_5 = useRef(null);
  const input_6 = useRef(null);

  function handleInputs(text: string, index: number) {
    setVerificationCode((prev) => prev + text);
    if (text) {
      if (index === 0) {
        input_2.current.focus();
      } else if (index === 1) {
        input_3.current.focus();
      } else if (index === 2) {
        input_4.current.focus();
      } else if (index === 3) {
        input_5.current.focus();
      } else if (index === 4) {
        input_6.current.focus();
      }
    }

    if (!text) {
      if (index === 1) {
        input_1.current.focus();
      } else if (index === 2) {
        input_2.current.focus();
      } else if (index === 3) {
        input_3.current.focus();
      } else if (index === 4) {
        input_4.current.focus();
      } else if (index === 5) {
        input_5.current.focus();
      }
    }
  }

  async function handleVerificationCode() {
    if (!verificationCode) return alert("Preencha o código de verificação!");

    try {
      const user_id = await AsyncStorage.getItem("@vambora:user_id");

      const response = await api.post(
        "/user/verify",
        {
          verificationCode,
        },
        {
          headers: {
            user_id,
          },
        }
      );

      if (response.status === 200) {
        alert("Conta verificada com sucesso!");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <Container>
      <TextGlobal size={32} weight="700">
        Verifique seu Código
      </TextGlobal>
      <InputContainer>
        {Array(6)
          .fill(0)
          .map((_, index) => {
            return (
              <Input
                key={index}
                ref={
                  index === 0
                    ? input_1
                    : index === 1
                    ? input_2
                    : index === 2
                    ? input_3
                    : index === 3
                    ? input_4
                    : index === 4
                    ? input_5
                    : input_6
                }
                keyboardType="numeric"
                onChangeText={(text) => handleInputs(text, index)}
                onKeyPress={(e) => {
                  if (e.nativeEvent.key === "Backspace") {
                    handleInputs("", index);
                  }
                }}
                maxLength={1}
              />
            );
          })}
      </InputContainer>
      <Button onPress={handleVerificationCode}> Validar </Button>
    </Container>
  );
}
