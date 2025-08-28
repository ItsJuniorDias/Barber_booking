import { Image } from "expo-image";

import {
  Text,
  Button,
  SearchBar,
  BarberList,
  SeeAllButton,
  BarberShopCard,
} from "@/components";

import alexandre from "../../assets/images/alexandre.jpg";
import card_home from "../../assets/images/card_home.png";

import Constants from "expo-constants";

import { View, StyleSheet, ScrollView } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 96 }}
      style={styles.container}
    >
      <View style={styles.content}>
        <View>
          <View style={styles.contentText}>
            <Feather name="map-pin" size={24} color={Colors.light.tint} />

            <Text
              title="Yogyakarta"
              fontFamily="regular"
              color={Colors.light.gray}
              fontSize={14}
            />
          </View>

          <Text
            title="Joe Samanta"
            fontFamily="bold"
            color={"black"}
            fontSize={18}
          />
        </View>

        <Image source={alexandre} style={styles.avatar} />
      </View>

      <View style={styles.header}>
        <Image source={card_home} style={styles.card} />

        <View style={styles.button}>
          <Button
            style={{ width: "40%", marginTop: -96 }}
            title="Booking Now"
            onPress={() => {}}
            isLoading={false}
          />
        </View>
      </View>

      <SearchBar />

      <BarberList />

      <View style={styles.seeAllButton}>
        <SeeAllButton />
      </View>

      <BarberShopCard />

      <BarberList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 24,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentText: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 8,
  },
  row: {
    marginBottom: 8,
    gap: 8,
    backgroundColor: "red",
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  header: {},
  card: {
    width: "100%",
    height: 225,
    borderRadius: 24,
    marginTop: 24,
  },
  button: {
    paddingLeft: 24,
  },
  seeAllButton: {
    alignItems: "center",
  },
});
