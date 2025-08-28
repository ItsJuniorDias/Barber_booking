import { useEffect, useRef, useState } from "react";
import { FlatList, Dimensions, View } from "react-native";

import avatar from "../../assets/images/avatar.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";

import { Text, Button } from "@/components";

import { Colors } from "@/constants/Colors";

import { Container, Thumbnail, Content, ContentButton } from "./styles";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  { id: "1", image: avatar },
  { id: "2", image: avatar2 },
  { id: "3", image: avatar3 },
];

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleStore = async () => {
    const tokenUser = await AsyncStorage.getItem("@token");

    if (tokenUser) {
      router.push("/(tabs)");
    } else {
      router.push("/(app)");
    }
  };

  useEffect(() => {
    handleStore();
  }, []);

  const router = useRouter();

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const objectTextRender = {
    0: {
      title: "Welcome Gobars",
      description:
        "Find the best grooming experience in your city with just one tap! Don't miss out on the haircut or treatment of your dreams. Let's start now!",
    },
    1: {
      title: "Loooking for barber?",
      description:
        "Find the best barbershop around you in seconds, make an appointment, and enjoy the best grooming experience.",
    },
    2: {
      title: "Everything in your hands",
      description:
        "With Gobar, find high-quality barbershops, see reviews, and make appointments easily. Achieve your confident appearance!",
    },
  };

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <Container>
            <Thumbnail source={item.image} />
          </Container>
        )}
      />

      <Content>
        <Text
          title={objectTextRender[currentIndex].title}
          color={Colors.light.background}
          fontFamily="bold"
          fontSize={24}
        />

        <Text
          title={objectTextRender[currentIndex].description}
          color={Colors.light.background}
          fontFamily="regular"
          fontSize={14}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {data.map((_, index) => (
            <View
              key={index}
              style={{
                height: 10,
                width: currentIndex === index ? 24 : 10,
                borderRadius: 5,
                marginHorizontal: 5,
                backgroundColor:
                  index === currentIndex ? Colors.light.tint : "#FFFFFF",
              }}
            />
          ))}
        </View>

        <ContentButton>
          <Button
            onPress={() => router.push("/(sign-in)")}
            title="Get Started"
            isLoading={false}
          />
        </ContentButton>
      </Content>
    </>
  );
}
