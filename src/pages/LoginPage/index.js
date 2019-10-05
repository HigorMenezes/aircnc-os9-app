import React, { useState, useEffect } from "react";
import { Image, AsyncStorage } from "react-native";

import api from "../../services/api";
import { Container, Form, Label, Input, Button, ButtonText } from "./styles";

import logo from "../../assets/logo.png";

function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      if (user) {
        navigation.navigate("ListPage");
      }
    });
  }, []);

  async function handleSubmit() {
    const response = await api.post("/sessions", {
      email
    });
    const { _id } = response.data;
    await AsyncStorage.setItem("user", _id);
    await AsyncStorage.setItem("techs", techs);
    navigation.navigate("ListPage");
  }

  return (
    <Container behavior="padding">
      <Image source={logo} />
      <Form>
        <Label>SEU EMAIL *</Label>
        <Input
          placeholder="Seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Label>TECNOLOGIAS *</Label>
        <Input
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <Button onPress={handleSubmit}>
          <ButtonText>Encontrar Spots</ButtonText>
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
