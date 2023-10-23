import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import Calificacion from "../../components/Rating";
import BotonesRedes from "../../components/BotonesRedes";
import ImageCarousel from "../../components/Carrusel";
<<<<<<< HEAD
import { Chip } from 'primereact/chip';
// Estilos
import "../../style.css";
=======
// import BarraMenuCli from "../../components/BarraMenuCli";
>>>>>>> 3cb65d8f7eff07076bc067fb2a02f879ba6916c6
import BarraMenuPro from "../../components/BarraMenuPro";
import BotonCalificacion from "../../components/AgregarCalificacion";
import Footer from "../../components/Footer";

export const PerfilPro = () => {
  const [usuario, setUsuario] = useState(null);
  const [portafolio, setPortafolio] = useState(null);
  const [profesionalData, setProfesionalData] = useState(null); // Estado para almacenar la información del profesional
  const [userRole, setUserRole] = useState(""); // Estado para almacenar el rol del usuario

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = parseJwt(token);
      setUserRole(decodedToken.role);

      if (decodedToken.role === "profesional") {
        // Lógica para obtener y almacenar los datos del perfil del profesional
        axios
          .get("http://localhost:4000/auth/perfil", {
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
        axios
          .get(`http://localhost:4000/portafolio/profesional/${userId}`, {
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
            <Calificacion />
          </div>

          <div className="descriptionPerfilProfesional">
            {profesionalData && (
              <div>
                <h3>
                  {profesionalData.nombre} {profesionalData.apellido}
                </h3>
<<<<<<< HEAD
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
=======
                {profesionalData.tipoProfesion &&
                profesionalData.tipoProfesion.length > 0 ? (
                  <h4>
                    Profesión:{" "}
                    {profesionalData.tipoProfesion[0].nombre_profesion}
                  </h4>
                ) : (
                  <p>Aún no se ha asignado una profesión</p>
                )}
>>>>>>> 3cb65d8f7eff07076bc067fb2a02f879ba6916c6
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
            <span className="resenaBloque">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae erat at justo dictum molestie. Nam venenatis vestibulum
              justo, in interdum diam. Morbi non pharetra ligula. Sed lobortis
              ac mi nec ultrices. Mauris sollicitudin vulputate dui a luctus.
              Aenean non condimentum dolor, at rutrum enim. Donec auctor dapibus
              leo, quis congue sem accumsan vel. Ut non accumsan quam. Nullam.
            </span>
            <span className="resenaBloque">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae erat at justo dictum molestie. Nam venenatis vestibulum
              justo, in interdum diam. Morbi non pharetra ligula. Sed lobortis
            </span>
            <span className="resenaBloque">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae erat at justo dictum molestie. Nam venenatis vestibulum
              justo, in interdum
            </span>
            <span className="resenaBloque">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              vitae erat at justo dictum molestie. Nam venenatis vestibulum
              justo, in interdum diam. Morbi non pharetra ligula. Sed lobortis
              ac mi nec ultrices. Mauris sollicitudin vulputate dui a luctus.
              Aenean non condimentum dolor, at rutrum enim. Donec auctor dapibus
              leo, quis congue sem accumsan vel. Ut non accumsan quam. Nullam.
            </span>
            <span className="resenaBloque">Lorem ipsum dolor sit!</span>
          </div>
        </div>
      </div>

      <div className="divFooter">
        <Footer />
      </div>
    </div>
  );
};
