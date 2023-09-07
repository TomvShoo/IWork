import React from "react";
import { Card } from "primereact/card";
import foto from "../Images/Shesho.jpeg";
import Calificacion from "../components/Rating";
import { Avatar } from "primereact/avatar";

const Estilo = {
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "1rem 1rem",
  },
  imagen: {
    width: "50%",
    height: "50%",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
};

export const Perfil = () => {
  return (
    <Card style={Estilo.card}>
      <p>
        <Avatar style={Estilo.imagen} image={foto} size="xlarge" />
      </p>
      <p style={Estilo.rating}>
        <Calificacion />
      </p>
      <h3>Nombre</h3>
    </Card>
  );
};
