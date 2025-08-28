import React from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";

import { Text } from "@/components";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const barbershops = [
  {
    id: "1",
    name: "Alana Barbershop – Haircut massage & Spa",
    location: "Banguntapan (5 km)",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFyYmVhcmlhfGVufDB8fDB8fHww",
  },
  {
    id: "2",
    name: "Hercha Barbershop – Haircut & Styling",
    location: "Jalan Kaliurang (8 km)",
    rating: 5.0,
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJlYXJpYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "3",
    name: "Barberking – Haircut styling & massage",
    location: "Jogja Expo Centre (12 km)",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1532710093739-9470acff878f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJhcmJlYXJpYXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function BarberList() {
  return (
    <View style={styles.container}>
      <Text
        title="Nearest Babershop"
        fontFamily="bold"
        color={"black"}
        fontSize={18}
      />

      <FlatList
        data={barbershops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Imagem */}
            <Image source={{ uri: item.image }} style={styles.image} />

            {/* Infos */}
            <View style={styles.info}>
              <Text
                title={item.name}
                fontFamily="bold"
                fontSize={16}
                color={"black"}
              />

              <View style={styles.row}>
                <Ionicons
                  name="location-outline"
                  size={16}
                  color={Colors.light.gray}
                />
                <Text
                  title={item.location}
                  fontFamily="regular"
                  fontSize={14}
                  color={Colors.light.gray}
                />
              </View>

              <View style={styles.row}>
                <Ionicons name="star" size={16} color={Colors.light.gray} />

                <Text
                  title={`${item.rating}`}
                  fontFamily="regular"
                  fontSize={14}
                  color={Colors.light.gray}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1E293B",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",

    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
    gap: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1E293B",
    marginBottom: 6,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    gap: 4,
  },
  location: {
    marginLeft: 6,
    color: Colors.light.gray,
    fontSize: 13,
  },
  rating: {
    marginLeft: 6,
    color: Colors.light.gray,
    fontSize: 13,
  },
});
