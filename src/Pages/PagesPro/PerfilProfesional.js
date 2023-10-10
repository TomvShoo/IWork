import React from "react";
import { Card } from "primereact/card";
import Calificacion from "../../components/Rating";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import BarraMenu from "../../components/BarraMenuPro"
import BotonesRedes from "../../components/BotonesRedes";
// Estilos
import "../../style.css";
import ImageCarousel from "../../components/Carrusel";

const Estilo = {
  carta: {
    flexDirection: "row",
    margin: "1rem 1rem",
    background: "#255eb3",
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
  contentContainer: {
    display: "flex",
    justifyContent: "Space-around",
    alingItems: "center",
  }
};

export const PerfilPro = () => {
  return (
    <div>
      <BarraMenu />
      <Card style={Estilo.carta}>
        <div style={Estilo.contentContainer}>
            <div className="info">
              <Avatar label="P" size="xlarge" />
            </div>
            <div>
              <h3>Nombre Apellido</h3>
              <h4>Profesión</h4>
            </div>
            <div>
              <Calificacion />
            </div>
            <div>
              <Link to="/EditarPerfilPro">
                <Button variant="contained" style={Estilo.button}>
                  Editar Perfil
                </Button>
              </Link>
              <Link to="/AgregarPortfolio">
                <Button variant="contained" style={Estilo.button}>
                  agregar Portafolio
                </Button>
              </Link>
            </div>
        </div>
      </Card>
      <div className="portafolio">
        <ImageCarousel/>
      </div>
      <div className="contacto">
        <BotonesRedes />
      </div>
    </div>
  );
};