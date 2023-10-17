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
    <div className="editarPerfilProContainer">
      <div className="menuBackLogin">
        <Link to="/PerfilCliente">
          <Button severity="secondary" text>
            <i
              className="pi pi-arrow-circle-left"
              style={{ fontSize: "1.75rem", color: "rgba(0, 0, 0, 0.5)" }}
            ></i>
          </Button>
        </Link>
        <span style={{ color: '#6C757D' }}>Editar perfil</span>
      </div>

      <div className="editarData">
        <div className="editarInputs">
          <InputText placeholder="Cambiar Nombre"></InputText>
          <InputText placeholder="Nueva Contraseña"></InputText>
          <InputText placeholder="Verificar contraseña"></InputText>
        </div>
        <div className="editarButton">
          <Link to="/PerfilCliente">
            <Button
              className="botonGuardar"
              label="Guardar cambios"
              icon="pi pi-save"
              rounded
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
