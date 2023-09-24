import { Link } from "react-router-dom";
import * as React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import BarraMenuCli from "../../components/BarraMenuCli";

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

export const EditarPerfilCli = () => {
  return (
    <div>
      <BarraMenuCli/>
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
          <Link to="/PerfilCliente">
            <Button severity="danger">Cancelar</Button>
          </Link>
          <Link to="/PerfilCliente">
            <Button>Aceptar</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
