import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import Calificacion from "../../components/Rating";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import BarraMenuCli from "../../components/BarraMenuCli";
import axios from 'axios';


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

  useEffect(() => {
    // obtener el token del almacenamiento local
    const token = localStorage.getItem('token');

    if(token) {
      //se realiza la solicitud al servidor 
      axios.get('http://localhost:4000/auth/perfil', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error('error al obtener los datos del usuario', error);
      });
    }

  })
  
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

    </div>
  );
};

export default PerfilCliente;
