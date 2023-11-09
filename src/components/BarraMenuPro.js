import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import styles from "./BarraMenuPro.module.css";
import { classNames } from "primereact/utils";

const BarraMenuPro = () => {
  const [searchValue, setSearchValue] = useState("");

  const cerrarSesion = () => {
    localStorage.removeItem("accessToken");
  };

  const menu = [
    {
      label: "Perfil",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: (
            <Link to="/EditarPerfilPro" className={styles.link}>
              Editar Perfil
            </Link>
          ),
          icon: "pi pi-pencil",
        },
        {
          label: (
            <Link to="/AgregarPortfolio" className={styles.link}>
              Agregar Portafolio
            </Link>
          ),
          icon: "pi pi-plus",
        },
      ],
    },
    {
      label: (
        <Link to="/PreguntasFrecuentes" className={styles.link}>
          FAQ
        </Link>
      ),
      icon: "pi pi-info-circle",
    },
    {
      label: (
        <Link to="/" onClick={cerrarSesion} className={styles.link}>
          Cerrar sesion
        </Link>
      ),
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const logo = (
    <img
      alt="logo"
      src="https://cdn-icons-png.flaticon.com/512/2880/2880841.png"
      className={styles.logo}
    ></img>
  );

  const MarcaPro = (
    <div style={{ display: "flex", alignItems: "center" }}>
      {logo}
      <span>iWork Pro</span>
    </div>
  );

  return (
    <div>
      <Menubar model={menu} start={MarcaPro} />
    </div>
  );
};

export default BarraMenuPro;
