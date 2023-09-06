import React from "react";
import { Card } from "primereact/card";
import foto from "../Images/Shesho.jpeg";
import Calificacion from "./Rating";
import { Avatar } from "primereact/avatar";
// import Carrusel from "./Carrusel";

const Estilo = {
  Imagen: {
    width: "50%",
    height: "50%",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
};

export const Perfil = () => {
  return (
    <div>
      <Card style={Estilo.card}>
        <p>
          <Avatar style={Estilo.Imagen} image={foto} size="xlarge" />
        </p>
        <p>
          <Calificacion />
        </p>
        <h1>Nombre</h1>
      </Card>
    </div>
  );
};
