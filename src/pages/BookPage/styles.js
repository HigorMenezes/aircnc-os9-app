import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 0px 30px;
  margin-top: 30px;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  border: 1px #ddd;
  padding: 0px 20px;
  font-size: 16px;
  color: #444;
  height: 44px;
  margin-bottom: 20px;
  border-radius: 2px;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  background-color: #f05a5b;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const CancelButton = styled(Button)`
  background-color: #ccc;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
