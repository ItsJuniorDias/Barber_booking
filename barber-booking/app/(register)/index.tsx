import { Button, Text, CustomInputs } from "@/components";
import { Colors } from "@/constants/Colors";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/service/api";
import {
  ButtonRegister,
  Container,
  Content,
  ContentInput,
  Footer,
  InputContainer,
} from "./styles";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

const schema = z
  .object({
    name: z.string("* Campo obrigatório").min(1, "* Campo obrigatório"),
    email: z.string().email("* E-mail inválido"),
    celular: z
      .string()
      .trim()
      .regex(/^\d{10,11}$/, "Número inválido — use apenas dígitos (10 ou 11)."),
    password: z.string().min(6, "* A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z
      .string("* Campo obrigatório")
      .min(1, "* Campo obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      celular: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  console.log(errors.name, "ERROR");

  const onSubmit = async (data: FormData) => {
    console.log("Login:", data);
  };

  return (
    <Container>
      <Content>
        <Text
          title="Register here"
          fontFamily="bold"
          color={Colors.light.tint}
          fontSize={28}
        />

        <Text
          title="Please enter your data to complete your account registration process"
          fontFamily="regular"
          color={Colors.light.gray}
          fontSize={16}
        />
      </Content>

      <InputContainer>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <>
              <CustomInputs
                value={value}
                onChangeText={onChange}
                icon="person"
                placeholder="Alexandre Junior"
                title="Name"
                showPassword={false}
                errors={errors.name}
              />
            </>
          )}
        />

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
                title="Email"
                showPassword={false}
                errors={errors.email}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name="celular"
          render={({ field: { onChange, value } }) => (
            <>
              <CustomInputs
                value={value}
                onChangeText={onChange}
                icon="phone-portrait-outline"
                placeholder="17 99111-5745"
                title="Phone number"
                showPassword={false}
                errors={errors.celular}
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
                placeholder="******"
                title="Create password"
                showPassword
                secureTextEntry={!showPassword}
                setShowPassword={setShowPassword}
                errors={errors.password}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <>
              <CustomInputs
                value={value}
                onChangeText={onChange}
                icon="key"
                placeholder="******"
                title="Confirm password"
                showPassword
                secureTextEntry={!showPassword}
                setShowPassword={setShowPassword}
                errors={errors.confirmPassword}
              />
            </>
          )}
        />
      </InputContainer>

      <Footer>
        <Button
          title="Register"
          onPress={handleSubmit(onSubmit)}
          isLoading={false}
        />

        <ButtonRegister onPress={() => router.push("/(register)")}>
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
        </ButtonRegister>
      </Footer>
    </Container>
  );
}
