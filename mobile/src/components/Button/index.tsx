import { Text } from "../Global";
import { Container } from "./styles";

interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
    <Container>
      <Text weight="700" color="#ffffff" size="25">
        {children}
      </Text>
    </Container>
  );
}
