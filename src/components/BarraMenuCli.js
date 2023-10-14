import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

export default function BarraMenuCli() {
  const menu = [
    {
      label: "Menú",
      icon: "pi pi-home",
    },
    {
      label: "Perfil",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "Ver Perfil",
          icon: "pi pi-eye",
        },
        {
          label: "Editar Perfil",
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
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
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
      <Menubar model={menu} start={logo} end={barra} />
    </div>
  );
}
