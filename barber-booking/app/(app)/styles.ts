import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Thumbnail = styled(Image)`
  width: ${Dimensions.get("screen").width}px;
  height: 700px;
`;

export const Content = styled.View`
  width: 100%;
  height: 270px;
  background-color: ${Colors.light.orange};
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  margin-top: -32px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
  gap: 8px;
  position: absolute;
  bottom: 0;
`;

export const ContentButton = styled.View`
  margin-top: 16px;
`;
