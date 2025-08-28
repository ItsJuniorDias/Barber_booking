import { Button, Text, CustomInputs } from "@/components";

import { Container } from "./styles";
import { Colors } from "@/constants/Colors";

export default function RegisterScreen() {
  return (
    <Container>
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
    </Container>
  );
}
