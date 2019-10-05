import React, { useState, useEffect } from "react";
import { withNavigation } from "react-navigation";
import api from "../../services/api";

import {
  Container,
  Title,
  Bold,
  TechSpotList,
  TechSpot,
  SpotImage,
  Company,
  Price,
  BookButton,
  BookButtonText
} from "./styles";

function SpotList({ tech, navigation }) {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    api
      .get("/spots", {
        params: { tech }
      })
      .then(({ data }) => setSpots(data.spots));
  }, []);

  function handleNavigate(id) {
    navigation.navigate("BookPage", { id });
  }

  return (
    <Container>
      <Title>
        Empresas que usam <Bold>{tech}</Bold>
      </Title>
      <TechSpotList
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TechSpot>
            <SpotImage source={{ uri: item.thumbnailUrl }} />
            <Company>{item.company}</Company>
            <Price>{item.price ? `R$ ${item.price}/dia` : "GRATUITO"}</Price>
            <BookButton onPress={() => handleNavigate(item._id)}>
              <BookButtonText>Solicitar reserva</BookButtonText>
            </BookButton>
          </TechSpot>
        )}
      />
    </Container>
  );
}

export default withNavigation(SpotList);
