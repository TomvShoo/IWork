import { Link } from "react-router-dom";
import * as React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import BarraMenuPro from "../../components/BarraMenuPro";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

export const EditarPerfilPro = () => {
  return (
    <div className="editarPerfilProContainer">
      <div className="registerBackLogin">
        <Link to="/PerfilProfesional">
          <Button severity="secondary" text>
            <i
              className="pi pi-arrow-circle-left"
              style={{ fontSize: "1.75rem", color: "rgba(0, 0, 0, 0.5)" }}
            ></i>
          </Button>
        </Link>
      </div>

      <div className="editarData">
        <div className="editarInputs">
          <InputText placeholder="Cambiar Nombre"></InputText>
          <InputText placeholder="Nueva Contraseña"></InputText>
          <InputText placeholder="Verificar contraseña"></InputText>
        </div>
        <div className="editarButton">
          <Link to="/PerfilProfesional">
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
