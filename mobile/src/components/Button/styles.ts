import styled from "styled-components/native";

interface ContainerProps {
  backgroundColor?: string;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${(props) => props.disabled ? "#999" : props.backgroundColor};
  border-radius: 48px;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
`;
