import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import Calificacion from "../../components/Rating";
import BotonesRedes from "../../components/BotonesRedes";
import ImageCarousel from "../../components/Carrusel";
import { Chip } from 'primereact/chip';
// Estilos
import "../../style.css";
import BarraMenuPro from "../../components/BarraMenuPro";
import BotonCalificacion from "../../components/AgregarCalificacion";
import Footer from "../../components/Footer";
import CalificacionPro from "../../components/RatingPro";

export const PerfilPro = () => {
  const [usuario, setUsuario] = useState(null);
  const [portafolio, setPortafolio] = useState(null);
  const [profesionalData, setProfesionalData] = useState(null);
  const [promedioCalificacion, setPromedioCalificacion] = useState(0);
  const [resenas, setResenas] = useState(null);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = parseJwt(token);
      setUserRole(decodedToken.role);

      if (decodedToken.role === "profesional") {
        // Lógica para obtener y almacenar los datos del perfil del profesional
        axios.get("http://localhost:4000/auth/perfil", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setProfesionalData(response.data); // Almacena los datos del perfil del profesional
            console.log(response.data);
          })
          .catch((error) => {
            console.error("error al obtener los datos del usuario", error);
          });

        const userId = decodedToken.id;
        axios.get(`http://localhost:4000/portafolio/profesional/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setPortafolio(response.data);
            console.log("Datos del portafolio:", response.data);
          })
          .catch((error) => {
            console.error("Error al obtener los datos del portafolio", error);
          });

        const fetchResenas = async () => {
          try {
            const resenasResponse = await axios.get(`http://localhost:4000/resena/profesional/${userId}`);
            setResenas(resenasResponse.data);
            console.log(resenasResponse.data);

            const sum = resenasResponse.data.reduce((total, resena) => total + resena.calificacion, 0);
            const promedio = resenasResponse.data.length > 0 ? sum / resenasResponse.data.length : 0;
            setPromedioCalificacion(promedio);
          } catch (error) {
            console.error('Error fetching resenas data:', error);
          }

        }
        fetchResenas();
      }
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
            <CalificacionPro promedio={promedioCalificacion} />
          </div>

          <div className="descriptionPerfilProfesional">
            {profesionalData && (
              <div>
                <h3>
                  {profesionalData.nombre} {profesionalData.apellido}
                </h3>
                <div>
                  <h4>Profesiones:</h4>
                  {profesionalData.tipoProfesion && profesionalData.tipoProfesion.length > 0 ? (
                    <ul>
                      {profesionalData.tipoProfesion.map((profesion, index) => (
                        <Chip key={index} label={profesion.nombre_profesion} className="p-mr-2" />
                      ))}
                    </ul>
                  ) : (
                    <p>Aún no se han asignado profesiones</p>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="contactoPerfilProfesional">
            <BotonesRedes />
          </div>

          <div className="botonesEditarAgregar">
            {userRole === "profesional" && (
              <Link to="/EditarPerfilPro">
                <Button
                  className="botonesPerfilProfesional"
                  label="Editar Perfil"
                  icon="pi pi-pencil"
                  rounded
                  outlined
                />
              </Link>
            )}
            {userRole === "profesional" && (
              <Link to="/AgregarPortfolio">
                <Button
                  className="botonesPerfilProfesional"
                  icon="pi pi-plus"
                  label="Agregar Portafolio"
                  rounded
                />
              </Link>
            )}
            {userRole === "cliente" && <BotonCalificacion />}
          </div>
        </div>

        <div className="portafolioProfesional">
          <ImageCarousel
            images={
              portafolio && portafolio.data ? [portafolio.data[0].imagen] : []
            }
          />
        </div>
      </div>

      <div className="vistaPerfilProfesionalDatos">
        <div className="dataPerfilProfesional">
          {/* Mostrar la descripción y los certificados del profesional */}
          <div className="portafolioProfesionalBloque">
            <div>
              <h5>Descripción</h5>
            </div>
            <div>
              <span>
                {portafolio && portafolio.data && portafolio.data[0].descripcion
                  ? portafolio.data[0].descripcion
                  : "Cargando..."}
              </span>
            </div>
          </div>
          <div className="portafolioProfesionalBloque">
            <div>
              <h5>Certificados</h5>
            </div>
            <div>
              <span>
                {portafolio &&
                  portafolio.data &&
                  portafolio.data[0].certificaciones
                  ? portafolio.data[0].certificaciones
                  : "Cargando..."}
              </span>
            </div>
          </div>
        </div>

        <div className="portafolioProfesionalBloque">
          <div>
            <h5>Reseñas</h5>
          </div>
          <div className="resenas">
            {resenas && resenas.map((resena, index) => (
              <span key={index} className="resenaBloque">
                <div className="resenaContent">
                  <div className="ContentUser">
                    <Avatar
                      label="U"
                      style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                      shape="circle"
                    />
                    <span>{resena.nombreUsuario}</span>
                  </div>
                  <CalificacionPro promedio={resena.calificacion} />
                </div>
                <span>{resena.resena}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="divFooter">
        <Footer />
      </div>
    </div>
  );
};
