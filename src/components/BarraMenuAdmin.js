import React from "react";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";

const BarraMenuAdmin = () => {
  const cerrarSesion = () => {
    localStorage.removeItem("accessToken");
  };
  const menu = [
    {
      label: 
      (<Link to="/" onClick={cerrarSesion} className="link">
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
      className="mr-2"
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