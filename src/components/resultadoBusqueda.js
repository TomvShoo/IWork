import React from "react";
import { Card } from 'primereact/card';
import { Chip } from "primereact/chip";
import { useNavigate } from "react-router-dom";


const Busqueda = ({ resultados }) => {
  const navigate = useNavigate();

  const redirigirPerfilProfesional = (idProfesional) => {
    navigate(`/perfil-profesional/${idProfesional}`);
  };

  return (
    <div className="busqueda">
      {resultados.map((resultado, index) => (
        <div key={index} className="resultado" onClick={() => redirigirPerfilProfesional(resultado.id)}>
          <Card>
            <p>{resultado.nombre}</p> {/* Reemplaza con los campos apropiados */}
            <p>{resultado.apellido}</p> {/* Reemplaza con los campos apropiados */}
            {resultado.tipoProfesion.map((profesion, i) => (
              <Chip key={i} label={profesion.nombre_profesion} className="p-mr-2" />
            ))}
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Busqueda;
