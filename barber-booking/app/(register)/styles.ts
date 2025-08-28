import styled from "styled-components/native";
import Constants from "expo-constants";
import { Colors } from "@/constants/Colors";

export const Container = styled.ScrollView`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: ${Constants.statusBarHeight};
  background-color: ${Colors.light.background};
`;

export const Content = styled.View`
  gap: 8px;
  margin-top: 24px;
`;

export const ContentInput = styled.View`
  width: 100%;
  height: 120px;
`;

export const InputContainer = styled.View`
  margin-top: 24px;
  background-color: red;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 24px;
`;

export const ButtonRegister = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`;
