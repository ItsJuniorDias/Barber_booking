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

export default function LoginScreen() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (item) => {
    setEmail(item);
  };

  const handleChangePassword = (item) => {
    setPassword(item);
  };

  return (
    <Container>
      <Thumb source={thumb} />

      <Content>
        <Text
          title="Welcome back 👋"
          fontFamily="semi-bold"
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
          <CustomInputs
            value={email}
            onChangeText={handleChange}
            icon="mail"
            placeholder="Joesamanta@gmail.com"
            title="Username"
            showPassword={false}
          />

          <CustomInputs
            value={password}
            onChangeText={handleChangePassword}
            icon="key"
            placeholder="*********"
            title="Password"
            showPassword
            secureTextEntry={!showPassword}
            setShowPassword={setShowPassword}
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

        <Button title="Login" onPress={() => {}} isLoading={false} />

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
