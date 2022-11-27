import styled from "styled-components/native";


interface TextProps {
  weight?: "500" | "600" | "700";
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) => weight ? `Quicksand-${weight}` : "Quicksand-500"};
  color: ${({ color }) => color || "#8257E5"};
  font-size: ${({ size }) => size ? `${size}px` : "16px"};
  opacity: ${({ opacity }) => opacity || 1};
`;