import thumb from "../../assets/images/thumb.png";

import { CustomInputs, Text, Button } from "@/components";

import {
  Container,
  Thumb,
  Content,
  ContentInput,
  ContentForget,
  Footer,
} from "./styles";
import { Colors } from "@/constants/Colors";
import { useContext, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/service/api";

import { useRouter } from "expo-router";
import { Alert } from "react-native";
import { AuthContext } from "@/context/AuthContext";

const schema = z.object({
  email: z.string().email("* E-mail inválido"),
  password: z.string().min(6, "* A senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function LoginScreen() {
  const { signIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  console.log(errors, "ERROR");

  const onSubmit = async (data: FormData) => {
    console.log("Login:", data);

    setIsLoading(true);

    try {
      const response = await api.post("/login", {
        email: data.email,
        password: data.password,
      });

      console.log(response.data.token, "DATA");

      signIn(response.data.token);

      if (!!response.data.token) {
        signIn(response.data.token);

        router.push("/(tabs)");
      }
    } catch (error) {
      console.log(error);

      setIsLoading(false);

      if (error.status === 400) {
        Alert.alert("Error", "Email inválido", [
          {
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {},
          },
        ]);
      }

      if (error.status === 401) {
        Alert.alert("Error", "Senha inválida", [
          {
            text: "Cancelar",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {},
          },
        ]);
      }
    }
  };
  return (
    <Container>
      <Thumb source={thumb} />

      <Content>
        <Text
          title="Welcome back 👋"
          fontFamily="bold"
          color={Colors.light.tint}
          fontSize={28}
        />

        <Text
          title="Please enter your login information below to access your account"
          fontFamily="regular"
          color={Colors.light.gray}
          fontSize={16}
        />

        <ContentInput>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <>
                <CustomInputs
                  value={value}
                  onChangeText={onChange}
                  icon="mail"
                  placeholder="itsjuniordias1997@gmail.com"
                  title="Username"
                  showPassword={false}
                  errors={errors.email}
                />
              </>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <>
                <CustomInputs
                  value={value}
                  onChangeText={onChange}
                  icon="key"
                  placeholder="*********"
                  title="Password"
                  showPassword
                  secureTextEntry={!showPassword}
                  setShowPassword={setShowPassword}
                  errors={errors.password}
                />
              </>
            )}
          />
        </ContentInput>

        <ContentForget>
          <Text
            title="Forgot password?"
            fontFamily="bold"
            color={Colors.light.tint}
            fontSize={14}
          />
        </ContentForget>

        <Button
          title="Login"
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
        />

        <Footer onPress={() => router.push("/(register)")}>
          <Text
            title="Don't have an account?"
            color={Colors.light.gray}
            fontFamily="bold"
            fontSize={16}
          />
          <Text
            title=" Register"
            color={Colors.light.tint}
            fontFamily="bold"
            fontSize={16}
          />
        </Footer>
      </Content>
    </Container>
  );
}
