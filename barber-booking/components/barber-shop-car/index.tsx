// App.js
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Text } from "@/components";
import { Colors } from "@/constants/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        title={"Most recommended"}
        fontFamily="bold"
        fontSize={18}
        color="black"
      />

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1693755807658-17ce5331aacb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhcmJlYXJpYXxlbnwwfHwwfHx8MA%3D%3D",
          }} // Substitua pela sua imagem
          style={styles.image}
        />

        <View style={styles.cardContent}>
          <Text
            title="Master piece Barbershop – Haircut styling"
            fontFamily="bold"
            color="black"
            fontSize={18}
          />

          <View style={styles.infoRow}>
            <Ionicons
              name="location-outline"
              size={16}
              color={Colors.light.gray}
            />
            <Text
              title="Joga Expo Centre (2 km)"
              fontFamily="regular"
              fontSize={14}
              color={Colors.light.gray}
            />
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="star" size={16} color={Colors.light.gray} />

            <Text
              title="5.0"
              fontFamily="regular"
              fontSize={14}
              color={Colors.light.gray}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    width: "100%",
    height: 216,
    marginTop: 24,
    borderRadius: 16,
  },
  bookingButton: {
    position: "absolute",
    bottom: 116,
    right: 4,
    backgroundColor: "#363062",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopLeftRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  bookingText: {
    color: "#fff",
    fontWeight: "600",
  },
  cardContent: {
    padding: 12,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    gap: 4,
  },
  location: {
    marginLeft: 6,
    color: "#7d7d7d",
  },
  rating: {
    marginLeft: 6,
    color: "#5a45ff",
    fontWeight: "500",
  },
});
