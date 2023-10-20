import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styles from "./BotonesAdmin.module.css";

export default function BotonAdmin() {
  return (
    <div className={styles.botonesAdminContainer}>
      <div className={styles.buscarBotonesAdmin}>
        <Button label="Usuario" icon="pi pi-search" />
        <InputText placeholder="Nombre de usuario" />
      </div>
      <div className={styles.botonesAdmin}>
        <Button icon="pi pi-times" className="p-button-danger" rounded />
        <Button icon="pi pi-check" className="p-button-success" rounded />
      </div>
    </div>
  );
}
