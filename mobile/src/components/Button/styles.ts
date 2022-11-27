import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }) => disabled ? "#999" : "#8257E5"};
  border-radius: 48px;
  padding: 16px 24px;
  align-items: center;
  justify-content: center;
`;
