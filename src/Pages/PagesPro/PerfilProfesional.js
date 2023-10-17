import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
// Components
import Calificacion from "../../components/Rating";
// import BarraMenu from "../../components/BarraMenuPro";
import BotonesRedes from "../../components/BotonesRedes";
import ImageCarousel from "../../components/Carrusel";
// import BarraMenuCli from "../../components/BarraMenuCli";
import BarraMenuPro from "../../components/BarraMenuPro";
// Estilos
import "../../style.css";
import BarraMenuPro from "../../components/BarraMenuPro";

export const PerfilPro = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // obtener el token del almacenamiento local
    const token = localStorage.getItem("accessToken");

    if (token) {
      //se realiza la solicitud al servidor
      axios
        .get("http://localhost:4000/auth/perfil", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUsuario(response.data);
        })
        .catch((error) => {
          console.error("error al obtener los datos del usuario", error);
        });
    }
  });

  return (
    <div className="perfilProfesionalContainer">
      <BarraMenuPro />

      <div className="vistaPerfilProfesional">
        <div className="dataPerfilProfesional">
          <div className="headerPerfilProfesional">
            <Avatar label="P" size="xlarge" shape="circle" />
            <Calificacion />
          </div>

          <div className="descriptionPerfilProfesional">
            {usuario && (
              <div>
                <h3>{usuario.nombre}</h3>
                <h4>Profesión</h4>
              </div>
            )}
          </div>
          <div className="contactoPerfilProfesional">
            <BotonesRedes />
          </div>

          <div className="botonesEditarAgregar">
            <Link to="/EditarPerfilPro">
              <Button
                className="botonesPerfilProfesional"
                label="Editar Perfil"
                icon="pi pi-pencil"
                rounded
                outlined
              />
            </Link>
            <Link to="/AgregarPortfolio">
              <Button
                className="botonesPerfilProfesional"
                icon="pi pi-plus"
                label="Agregar Portafolio"
                rounded
              />
            </Link>
          </div>
        </div>

        <div className="portafolioProfesional">
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};
