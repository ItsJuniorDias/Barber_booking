import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function SeeAllButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>See All</Text>

      <View style={styles.iconWrapper}>
        <Feather name="arrow-up-right" size={24} color="#2D2470" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2D2470",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2D2470",
    marginRight: 6,
  },
  iconWrapper: {
    borderWidth: 2,
    borderColor: "#2D2470",
    borderRadius: 6,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
