import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 10px;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;

export const Logo = styled.Image`
  height: 32px;
  resize-mode: contain;
  align-self: center;
`;
