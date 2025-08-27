import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { Text } from "../";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function CustomInputs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text
        title="Username"
        fontFamily="semi-bold"
        fontSize={16}
        color={Colors.light.tint}
        style={{ marginBottom: 16 }}
      />

      <View style={styles.content}>
        <Ionicons
          name="mail"
          size={20}
          color="#2d1b69"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="Joesamanta@gmail.com"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <Text
        title="Password"
        fontFamily="semi-bold"
        fontSize={16}
        color={Colors.light.tint}
        style={{ marginBottom: 16 }}
      />

      <View style={styles.content}>
        <Ionicons
          name="key"
          size={20}
          color="#2d1b69"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="********"
          placeholderTextColor="#aaa"
          style={styles.input}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: "PlusJakartaSansSemiBold",
  },
});
