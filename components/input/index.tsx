import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { Text } from "../";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

interface CustomInputsProps {
  value: string;
  onChangeText: (item: string) => void;
  title: string;
  placeholder: string;
  icon: string;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  secureTextEntry?: boolean;
}

export default function CustomInputs({
  value,
  title,
  placeholder,
  icon,
  onChangeText,
  showPassword,
  setShowPassword,
  secureTextEntry,
}: CustomInputsProps) {
  return (
    <View style={styles.container}>
      <Text
        title={title}
        fontFamily="semi-bold"
        fontSize={16}
        color={Colors.light.tint}
        style={{ marginBottom: 16 }}
      />

      <View style={styles.content}>
        <Ionicons
          name={icon}
          size={20}
          color="#2d1b69"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          keyboardType="email-address"
          secureTextEntry={secureTextEntry}
        />

        {showPassword && (
          <TouchableOpacity
            onPress={() => setShowPassword((prevState) => !prevState)}
          >
            <Ionicons
              name={!secureTextEntry ? "eye" : "eye-off"}
              size={20}
              color="#aaa"
            />
          </TouchableOpacity>
        )}
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
