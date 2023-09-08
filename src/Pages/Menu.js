import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
//import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar"
import foto from "../Images/Shesho.jpeg";
import Calificacion from "../components/Rating";
import Carrusel from "../components/Carrusel";
//import { InputText } from "primereact/inputtext";
//import { BarraMenu } from "../components/Sidebar";

const Estilos = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#005694",
  },
  div: {
    margin: "1rem",
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
  carta: {
    display: "flex",
    justifyContent: "Space-around",
    alingItems: "center",
  },
};

export const Menu = () => {

  return (
    <div>
      <div>
        <Link>
          <Button>Cercanos a ti</Button>
          <Button>Filtrar</Button>
        </Link>
      </div>
      <Card>
        <div style={Estilos.carta}>
          <div>
            <p>
              <Avatar label="P" shape="circle" />
            </p>
          </div>
          <div>
            <h3>Nombre Apellido</h3>
            <h4>Profesion</h4>
          </div>
          <div>
            <p style={Estilos.rating}>
              <Calificacion />
            </p>
          </div>
        </div>
        <div>
          <Carrusel/>
        </div>
      </Card>
    </div>
  );
};
