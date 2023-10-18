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
// Estilos
import "../../style.css";
import BarraMenuPro from "../../components/BarraMenuPro";

export const PerfilPro = () => {
  const [usuario, setUsuario] = useState(null);
  const [portafolio, setPortafolio] = useState(null);

  useEffect(() => {
    // obtener el token del almacenamiento local
    const token = localStorage.getItem("accessToken");

    if (token) {
      //se realiza la solicitud al servidor
      axios.get("http://localhost:4000/auth/perfil", {
        headers: {
          Authorization: `Bearer ${token}`,},})
        .then((response) => {
          setUsuario(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("error al obtener los datos del usuario", error);
        });
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = parseJwt(token);
      const userId = decodedToken.id;

      axios.get(`http://localhost:4000/portafolio/profesional/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },})
        .then((response) => {
          setPortafolio(response.data);
          console.log("Datos del portafolio:", response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los datos del portafolio", error);
        });
    }
  }, []);

  function parseJwt(token) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  }

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
                <h3>{usuario.nombre} {usuario.apellido}</h3>
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
        <ImageCarousel images={ portafolio && portafolio.data ? [portafolio.data[0].imagen] : []}/>
        </div>
      </div>

      <div className="vistaPerfilProfesional">
        <div className="contenidoProfesional">
          <div className="portafolioProfesional">
            <div className="description">
              <h5>Descripcion</h5>
            </div>
            <div>
            <span>{portafolio && portafolio.data && portafolio.data[0].descripcion ? portafolio.data[0].descripcion : "Cargando..."}</span>
            </div>
          </div>
          <div className="portafolioProfesional">
            <div className="description">
              <h5>Certificados</h5>
            </div>
            <div>
              <span>{portafolio && portafolio.data && portafolio.data[0].certificaciones ? portafolio.data[0].certificaciones : "Cargando..."}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};