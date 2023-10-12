import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import Calificacion from "../../components/Rating";
import Carrusel from "../../components/Carrusel";
import BarraMenuCli  from "../../components/BarraMenuCli";
import ModalAdvertenciaCli from "../../components/ModalAdvertenciaCli";


const Estilos = {
  divLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "Space-evenly",
    margin: "1rem",
  },
  div: {
    margin: "rem 0rem",
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

export const MenuCli = () => {
  return (
    <div>
      <BarraMenuCli />
      <div style={Estilos.divLinks}>
        {/* <Link>
          <Button>Cercanos a ti</Button>
        </Link>
        <Link>
          <Button>Filtrar</Button>
        </Link> */}
        <ModalAdvertenciaCli />
      </div>
      <Card>
        <div style={Estilos.carta}>
          <div>
            <Avatar label="P" shape="circle" />
          </div>
          <div>
            <h3>Nombre Apellido</h3>
            <h4>Profesión</h4>
          </div>
          <div>
            <Calificacion />
          </div>
        </div>
        <div>
          <Carrusel />
        </div>
      </Card>
    </div>
  );
};
