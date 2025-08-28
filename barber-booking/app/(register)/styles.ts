import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: ${Constants.statusBarHeight};
`;
