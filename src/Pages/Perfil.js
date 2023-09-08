import React from "react";
import { Card } from "primereact/card";
import foto from "../Images/Shesho.jpeg";
import Calificacion from "../components/Rating";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Outlet, Link } from "react-router-dom";
import { BarraMenu } from "../components/BarraMenu";

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
    padding: "0.85rem 1.25rem",
    margin: "1.25rem 0rem",
  },
};

export const Perfil = () => {
  return (
    <div>
      <div>
        <BarraMenu/>
      </div>
      <div><Card style={Estilo.card}>
        <p>
          <Avatar style={Estilo.imagen} image={foto} size="xlarge" />
        </p>
        <p style={Estilo.rating}>
          <Calificacion />
        </p>
        <h3>Nombre</h3>
      </Card>
      </div>
      <div>
      <div>
        <Link to="/EditarPerfil">
          <Button variant="contained" style={Estilo.button}>
            Editar Perfil
          </Button>
        </Link>
      </div>
      </div>
    </div>
  );
};
