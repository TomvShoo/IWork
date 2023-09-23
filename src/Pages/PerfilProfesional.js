import React from "react";
import { Card } from "primereact/card";
import foto from "../images/Shesho.jpeg";
import Calificacion from "../components/Rating";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import BarraMenu from "../components/BarraMenu";

const Estilo = {
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: "1rem 1rem",
  },
  imagen: {
    width: "20%",
    height: "20%",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    padding: "0.75rem 1rem",
    margin: "0.5rem 0rem",
  },
};

export const Perfil = () => {
  return (
    <div>
      <BarraMenu />
      <Card style={Estilo.card}>
        <p>
          <Avatar style={Estilo.imagen} image={foto} size="xlarge" />
        </p>
        <p style={Estilo.rating}>
          <Calificacion />
        </p>
        <h3>Nombre</h3>
        <Link to="/EditarPerfil">
          <Button variant="contained" style={Estilo.button}>
            Editar Perfil
          </Button>
        </Link>
      </Card>
    </div>
  );
};
