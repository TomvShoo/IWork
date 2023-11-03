import { Link } from "react-router-dom";
import React from "react";
import { Menubar } from "primereact/menubar";
import styles from "./BarraMenuAdmin.module.css";

const BarraMenuAdmin = () => {
  const cerrarSesion = () => {
    localStorage.removeItem("accessToken");
  };
  const menu = [
    {
      label: 
      (<Link to="/" onClick={cerrarSesion} className={styles.link}>
        Cerrar sesion
      </Link>),
      icon: "pi pi-fw pi-power-off",
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
      <Menubar model={menu} start={MarcaAdmin} />
    </div>
  );
}
export default BarraMenuAdmin;