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
    alignItems: "center",
  },
})`
`;

export const Inputs = styled.View`
  margin: 30px 0;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 5px 5px;
`;

export const InputText = styled.TextInput`
  padding: 10px;
  border: 1px solid #ABABAB;
  border-radius: 8px;
  background: #eee;
  margin-bottom: 20px;
`;

export const NoRegisterText = styled.Text`
  margin-left: 5px;
  font-weight: 500;
  font-size: 16px;
`;

export const LinkText = styled.Text`
  color : #8257E5;
  font-weight: 600;
  font-size: 16px
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: absolute;
`;
