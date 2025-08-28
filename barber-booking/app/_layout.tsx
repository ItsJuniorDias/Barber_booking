import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";

import { useColorScheme } from "@/hooks/useColorScheme";
import { AuthContext, AuthProvider } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  const [token, setToken] = useState("");

  const router = useRouter();

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    PlusJakartaSansRegular: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSansBold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    PlusJakartaSansSemiBold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  const handleStore = async () => {
    const tokenUser = await AsyncStorage.getItem("@token");
    console.log(tokenUser, "TOKEN");

    setToken(tokenUser);
  };

  useEffect(() => {
    handleStore();
  }, []);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  if (true) {
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(app)/index" options={{ headerShown: false }} />
          <Stack.Screen name="(home)/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="(register)/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(authentication)/index"
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="(sign-in)/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
