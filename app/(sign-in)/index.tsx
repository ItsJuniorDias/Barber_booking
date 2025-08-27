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
import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("* E-mail inválido"),
  password: z.string().min(6, "* A senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

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

  const onSubmit = (data: FormData) => {
    console.log("Login:", data);
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
                  placeholder="Joesamanta@gmail.com"
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
          isLoading={false}
        />

        <Footer>
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
