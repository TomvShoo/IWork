import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import BarraMenuCli from "../../components/BarraMenuCli";
import axios from "axios";
import Footer from "../../components/Footer";
import CalificacionPro from "../../components/RatingPro";

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

const PerfilCliente = () => {
  const [usuario, setUsuario] = useState(null);
  const [resenas, setResenas] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = parseJwt(token);
      const userId = decodedToken.id;
      axios.get("https://api-iwork.onrender.com/auth/perfil", {
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

      const fetchResenas = async () => {
        try {
          const resenasResponse = await axios.get(`https://api-iwork.onrender.com/resena/cliente/${userId}`
          );
          setResenas(resenasResponse.data);
          console.log(resenasResponse.data);
        } catch (error) {
          console.error("Error fetching resenas data:", error);
        }
      };
      fetchResenas();
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
    <div>
      <BarraMenuCli />
      <Card style={Estilo.card}>
        <p>
          <Avatar style={Estilo.imagen} size="xlarge" />
        </p>
        {usuario && (
          <div>
            <h3>Nombre: {usuario.nombre}</h3>
            <p>Apellido: {usuario.apellido}</p>
          </div>
        )}

        <Link to="/EditarPerfilCli">
          <Button variant="contained" style={Estilo.button}>
            Editar Perfil
          </Button>
        </Link>
      </Card>

      <div>
        {resenas &&
          resenas.map((resena, index) => (
            <span key={index} >
              <div>
                <div>
                  <Avatar
                    label="U"
                    style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                    shape="circle"
                  />
                  <span>{resena.dueno.nombre}</span>
                  <span>{resena.dueno.apellido}</span>
                </div>
                <CalificacionPro promedio={resena.calificacion} />
              </div>
              <span>{resena.resena}</span>
            </span>
          ))}
      </div>
      <div className="divFooter">
        <Footer />
      </div>
    </div>
  );
};

export default PerfilCliente;
