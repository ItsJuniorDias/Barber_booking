import { Colors } from "@/constants/Colors";
import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";

import { Text } from "@/components";
import { api } from "@/service/api";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function AuthenticationScreen() {
  const { phone } = useLocalSearchParams();

  const router = useRouter();

  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const finalCode = code.join("");
    console.log("Code entered:", finalCode);

    try {
      await api.post("/verify-otp", {
        phone,
        code: finalCode,
      });

      router.push("/(tabs)");
    } catch (error) {
      Alert.alert("Error", "Codigo incorrreto ou inválido", [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text
        title="Authentication"
        fontFamily="bold"
        color={Colors.light.tint}
        fontSize={24}
        style={styles.title}
      />

      <Text
        title=" Please enter the authentication code that we have sent to your email"
        fontFamily="regular"
        fontSize={16}
        color={Colors.light.gray}
        style={styles.subtitle}
      />

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleBackspace(e, index)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text
          title="Send"
          color={Colors.light.gray}
          fontFamily="bold"
          fontSize={16}
          style={styles.buttonText}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          title="Have not receive code?"
          fontFamily="semi-bold"
          color={Colors.light.tint}
          fontSize={16}
          style={styles.link}
        />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2d1e55",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  input: {
    width: 50,
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 22,
    marginHorizontal: 5,
    color: "#2d1e55",
  },
  button: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  link: {
    color: "#3e2c73",
    fontSize: 14,
    fontWeight: "500",
  },
});
