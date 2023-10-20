import { Link } from "react-router-dom";
import * as React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import styles from "./EditarPerfilCli.module.css";

export const EditarPerfilCli = () => {
  return (
    <div className={styles.editarPerfilCliContainer}>
      <div className={styles.menuBackNav}>
        <Link to="/PerfilCliente">
          <Button severity="secondary" text>
            <i
              className="pi pi-arrow-circle-left"
              style={{ fontSize: "1.75rem", color: "rgba(0, 0, 0, 0.5)" }}
            ></i>
          </Button>
        </Link>
        <span style={{ color: "#6C757D" }}>Editar perfil</span>
      </div>

      <div className={styles.editarData}>
        <div className={styles.editarInputs}>
          <InputText placeholder="Cambiar Nombre"></InputText>
          <InputText placeholder="Nueva Contraseña"></InputText>
          <InputText placeholder="Verificar contraseña"></InputText>
        </div>
        <div className={styles.editarButton}>
          <Link to="/PerfilCliente">
            <Button
              className={styles.botonGuardar}
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
