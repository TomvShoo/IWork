import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
// Estilos
import styles from "./BarraMenuPro.module.css";

const BarraMenuPro = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Aquí debes enviar una solicitud al backend utilizando el valor de búsqueda
    // Puedes usar fetch o axios para enviar la solicitud al servidor NestJS
    // Por ejemplo:
    // fetch(`/api/search?query=${searchValue}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Hacer algo con la respuesta del servidor
    //   })
    //   .catch(error => {
    //     // Manejar el error si hay alguno
    //   });
  };

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
            <Link to="/PerfilProfesional" className={styles.link}>
              Ver Perfil
            </Link>
          ),
          icon: "pi pi-eye",
        },
        {
          label: (
            <Link to="/EditarPerfilPro" className={styles.link}>
              Editar Perfil
            </Link>
          ),
          icon: "pi pi-pencil",
        },
      ],
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
      height="40"
      className="mr-2"
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
