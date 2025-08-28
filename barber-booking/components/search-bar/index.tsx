import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      {/* Caixa de pesquisa */}
      <View style={styles.inputBox}>
        <Ionicons name="search-outline" size={20} color="#64748B" />
        <TextInput
          placeholder="Search barber’s, haircut ser..."
          placeholderTextColor="#94A3B8"
          style={styles.textInput}
        />
      </View>

      {/* Botão de filtro */}
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options-outline" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginTop: 16,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#F1F5F9",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },
  textInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: "#1E293B",
    fontFamily: "PlusJakartaSansRegular",
  },
  filterButton: {
    marginLeft: 10,
    backgroundColor: "#312E81",
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
