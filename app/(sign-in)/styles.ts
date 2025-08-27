import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${Colors.light.background};
`;

export const Thumb = styled(Image)`
  width: ${Dimensions.get("screen").width}px;
  height: 424px;
`;

export const Content = styled.View`
  width: 100%;
  background-color: ${Colors.light.background};
  padding: 24px;
  border-top-right-radius: 44px;
  border-top-left-radius: 44px;
  margin-top: -96px;
  gap: 8px;
`;

export const ContentInput = styled.View`
  margin-top: 24px;
`;

export const ContentForget = styled.TouchableOpacity`
  align-items: flex-end;
  margin-bottom: 24px;
`;

export const Footer = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  flex-direction: row;
`;
