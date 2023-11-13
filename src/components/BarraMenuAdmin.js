// import { Link } from "react-router-dom";
import React from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import styles from "./BarraMenuAdmin.module.css";
import Cookies from "js-cookie";

const BarraMenuAdmin = () => {

  const cerrarSesion = () => {
    confirmDialog({
      message: "Estás a punto de cerrar sesión, ¿seguro que quieres salir?",
      header: "Cerrar Sesión",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Cerrar Sesión",
      rejectLabel: "No",
      accept: () => {
        Cookies.remove("accessToken");
        window.location.href = "/";
      },
    });
  };

  const menu = [
    {
      label: (
        <Button
          onClick={cerrarSesion}
          icon="pi pi-fw pi-power-off"
          label="Cerrar Sesión"
        ></Button>
      ),
    },
  ];

  const logo = (
    <img
      alt="logo"
      src="https://cdn-icons-png.flaticon.com/512/2416/2416666.png"
      height="40"
      className={styles.logo}
    ></img>
  );

  const MarcaAdmin = (
    <div style={{ display: "flex", alignItems: "center" }}>
      {logo}
      <span>iWork Administrador</span>
    </div>
  );

  return (
    <div>
      <ConfirmDialog />
      <Menubar model={menu} start={MarcaAdmin} />
    </div>
  );
};
export default BarraMenuAdmin;
