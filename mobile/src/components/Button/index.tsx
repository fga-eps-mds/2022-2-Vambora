import { ViewProps } from "react-native";
import { TextGlobal } from "../Global";
import { Container } from "./styles";

interface ButtonProps extends ViewProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
    <Container>
      <TextGlobal weight="700" color="#ffffff" size="25">
        {children}
      </TextGlobal>
    </Container>
  );
}
