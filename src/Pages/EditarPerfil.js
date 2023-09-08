import { Link } from "react-router-dom";
import * as React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { BarraMenu } from "../components/BarraMenu";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

const Estilo = {
  divContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "3rem 0rem",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "1rem 2rem",
  },
  cuentas: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
  },
  cuenta: {
    margin: "1rem 0rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    margin: "2rem 0rem",
    justifyContent: "space-evenly",
  },
};

export const EditarPerfil = () => {
  return (
    <div>
      <BarraMenu/>
      <div style={Estilo.divContainer}>
        <div style={Estilo.inputs}>
          <InputText placeholder="Cambiar Nombre" style={Estilo.input}></InputText>
          <InputText placeholder="Nueva Contraseña" style={Estilo.input}></InputText>
          <InputText
            placeholder="Verificar contraseña"
            style={Estilo.input}
          ></InputText>
        </div>
        <div style={Estilo.button}>
          <Link to="/Login">
            <Button severity="danger">Cancelar</Button>
          </Link>
          <Link to="/Login">
            <Button>Aceptar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
