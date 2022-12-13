import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #fafafa;
  justify-content: center;
  align-items: center;
  `;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  },
})``;

export const Form = styled.View`
    align-items: center;
    width: 60%;
`;

export const InputText = styled.TextInput`
    background: #fff;
    width: 100%;
    border-radius: 24px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;

`;
