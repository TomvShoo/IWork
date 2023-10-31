import React from "react";
import { Card } from "primereact/card";
import { Chip } from "primereact/chip";
import { useNavigate } from "react-router-dom";
// Estilos
import styles from "./resultadoBusqueda.module.css";

const Busqueda = ({ resultados }) => {
  const navigate = useNavigate();

  const redirigirPerfilProfesional = (idProfesional) => {
    navigate(`/perfil-profesional/${idProfesional}`);
  };

  return (
    <div className={styles.busqueda}>
      {/* {resultados.map((resultado, index) => (
        <div key={index} className="resultado" onClick={() => redirigirPerfilProfesional(resultado.id)}>
          <Card>
            <p>{resultado.nombre}</p>
            <p>{resultado.apellido}</p>
            {resultado.tipoProfesion.map((profesion, i) => (
              <Chip key={i} label={profesion.nombre_profesion} className="p-mr-2" />
            ))}
          </Card>
        </div>
      ))} */}
      {resultados.map((resultado, index) => (
        <div
          key={index}
          className={styles.resultados}
          onClick={() => redirigirPerfilProfesional(resultado.id)}
        >
          <div className={styles.resultado}>
            <div className={styles.nombre}>
              <p>{resultado.nombre}</p>{" "}
              <p>{resultado.apellido}</p>{" "}
            </div>
            {resultado.tipoProfesion.map((profesion, i) => (
              <Chip
                key={i}
                label={profesion.nombre_profesion}
                className="p-mr-2"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Busqueda;
