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
import BarraMenuCli from "../../components/BarraMenuCli";
// Estilos
import "../../style.css";

export const PerfilPro = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // obtener el token del almacenamiento local
    const token = localStorage.getItem("token");

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
      <div>
        <BarraMenuCli />
      </div>

      <div className="cartaPerfilProfesional">
        <div className="headerCartaPerfilProfesional">
          <div>
            <Avatar label="P" size="large" shape="circle" />
          </div>
          <div>
            {usuario && (
              <div>
                <h3>{usuario.nombre}</h3>
                <h4>Profesión</h4>
              </div>
            )}
          </div>
          <div>
            <Calificacion />
          </div>
        </div>
      </div>

      <div className="botonesEditarAgregar">
        <Link to="/EditarPerfilPro">
          <Button
            className="botonEditarPerfilPro"
            label="Editar Perfil"
            icon="pi pi-pencil"
            rounded
            outlined
          />
        </Link>
        <Link to="/AgregarPortfolio">
          <Button
            className="botonAgregarPortafolio"
            icon="pi pi-plus"
            label="Agregar Portafolio"
            rounded
          />
        </Link>
      </div>

      <div className="portafolio">
        <ImageCarousel />
      </div>

      <div className="contactoPerfilProfesional">
        <BotonesRedes />
      </div>
    </div>
  );
};
