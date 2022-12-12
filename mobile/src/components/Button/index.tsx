import { ViewProps } from "react-native";
import { TextGlobal } from "../Global";
import { Container } from "./styles";

interface ButtonProps extends ViewProps {
  children: string;
  onPress: () => any;
  color?: string;
  backgroundColor?: string;
}

export function Button({
  children,
  onPress,
  backgroundColor = "#8257e5",
  color = "#fff",
}: ButtonProps) {
  return (
    <Container onPress={onPress} backgroundColor={backgroundColor}>
      <TextGlobal weight="700" color={color} size={25}>
        {children}
      </TextGlobal>
    </Container>
  );
}
