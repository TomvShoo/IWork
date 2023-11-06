import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BarraMenuCli from "../../components/BarraMenuCli";
import CalificacionPro from "../../components/RatingPro";
import Footer from "../../components/Footer";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { DataScroller } from "primereact/datascroller";
import axios from "axios";
import styles from "./PerfilCliente.module.css";

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
  const [totalResenas, setTotalResenas] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decodedToken = parseJwt(token);
      const userId = decodedToken.id;
      axios
        .get("https://api-iwork.onrender.com/auth/perfil", {
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
          const resenasResponse = await axios.get(
            `https://api-iwork.onrender.com/resena/cliente/${userId}`
          );
          setResenas(resenasResponse.data);
          setTotalResenas(resenasResponse.data.length);
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

  const itemTemplate = (data) => {
    return (
      <div className={styles.resenas}>
        <div className={styles.resenaBloqueData}>
          <div className={styles.resenaBloqueUser}>
            <Avatar
              label="U"
              style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
              shape="circle"
            />
            <span className={styles.resenaNombre}>
              {data.dueno.nombre} {data.dueno.apellido}
            </span>
          </div>
          <CalificacionPro promedio={data.calificacion} />
        </div>
        <div className={styles.resenaBloqueComent}>
          <span>{data.resena}</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={styles.navMenu}>
        <BarraMenuCli />
      </div>
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

      <div className={styles.dataResena}>
        <div>
          <h5>Reseñas Escritas</h5>
        </div>
        <div>
          {resenas && (
            <DataScroller
              value={resenas}
              itemTemplate={itemTemplate}
              scrollHeight="80vh"
              rows={totalResenas}
              inline
            />
          )}
        </div>
      </div>
      <div className="divFooter">
        <Footer />
      </div>
    </div>
  );
};

export default PerfilCliente;
