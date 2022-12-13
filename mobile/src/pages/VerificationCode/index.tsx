import React, { useState } from "react";
import { Button } from "../../components/Button";
import { TextGlobal } from "../../components/Global";

import { Container, Input } from "./styles";

export function VerificationCode() {
  const [verificationCode, setVerificationCode] = useState<string>("");

  function handleVerificationCode() {
    console.log(verificationCode);
  }

  return (
    <Container>
      <TextGlobal size={32} weight="700">
        Verifique seu Código
      </TextGlobal>
      <Input onChangeText={setVerificationCode} />
      <Button onPress={handleVerificationCode}> Validar </Button>
    </Container>
  );
}
