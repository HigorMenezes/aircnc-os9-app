import React, { useState, useEffect } from "react";
import { AsyncStorage, ScrollView } from "react-native";

import logo from "../../assets/logo.png";

import { Container, Logo } from "./styles";

import SpotList from "../../components/SpotList";

function ListPage() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storageTechs => {
      const techsArray = storageTechs.split(",").map(tech => tech.trim());
      setTechs(techsArray);
    });
  }, []);

  return (
    <Container>
      <Logo source={logo} />
      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </Container>
  );
}

export default ListPage;
