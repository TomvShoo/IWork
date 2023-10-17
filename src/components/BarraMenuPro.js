import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import "../style.css";

export default function BarraMenuPro() {
  const menu = [
    {
      label: (
        <Link to="/MenuPro" className="link">
          Menú
        </Link>
      ),
      icon: "pi pi-home",
    },
    {
      label: "Perfil",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: (
            <Link to="/PerfilProfesional" className="link">
              Ver Perfil
            </Link>
          ),
          icon: "pi pi-eye",
        },
        {
          label: (
            <Link to="/EditarPerfilPro" className="link">
              Editar Perfil
            </Link>
          ),
          icon: "pi pi-pencil",
        },
      ],
    },
    {
      label: "Cerrar Sesión",
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

  const barra = (
    <div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText placeholder="Buscar" />
      </span>
    </div>
  );

  return (
    <div>
      <Menubar model={menu} start={MarcaPro} end={barra} />
    </div>
  );
}
