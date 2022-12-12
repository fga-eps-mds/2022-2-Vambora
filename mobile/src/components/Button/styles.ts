import styled from "styled-components/native";

interface ContainerProps {
  backgroundColor?: string;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${(props) => props.backgroundColor || "#8257e5"};
  opacity: ${(props) => props.disabled ? 0.5 : 1};
  border-radius: 48px;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
`;
