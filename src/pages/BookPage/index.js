import React, { useState } from "react";
import { AsyncStorage, Alert } from "react-native";

import api from "../../services/api";

import {
  Container,
  Form,
  Label,
  Input,
  Button,
  CancelButton,
  ButtonText
} from "./styles";

function BookPage({ navigation }) {
  const [date, setDate] = useState("");
  const id = navigation.getParam("id");

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem("user");
    await api.post(`/spots/${id}/bookings`, { date }, { headers: { user_id } });
    Alert.alert("Solicitação de reserva enviada.");
    navigation.navigate("ListPage");
  }

  async function handleCancel() {
    navigation.navigate("ListPage");
  }

  return (
    <Container>
      <Form>
        <Label>DATA DE INTERESSE *</Label>
        <Input
          placeholder="Qual data você quer reservar"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={date}
          onChangeText={setDate}
        />

        <Button onPress={handleSubmit}>
          <ButtonText>Solicitar reserva</ButtonText>
        </Button>
        <CancelButton onPress={handleCancel}>
          <ButtonText>Cancelar</ButtonText>
        </CancelButton>
      </Form>
    </Container>
  );
}

export default BookPage;
