import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';

const start = <img alt="logo" src="https://cdn-icons-png.flaticon.com/512/2880/2880841.png" height="40" className="mr-2"></img>;
const end = <InputText placeholder="Search" type="text" className="w-full" />;
const items = [
  {
    label: 'Perfil',
    icon: 'pi pi-fw pi-user',
    items: [
      {
        label: <Link to="/Perfil">Ir</Link>,
        icon: 'pi pi-fw pi-arrow-right',
      },
      {
        label: <Link to="/EditarPerfil">Editar</Link>,
        icon: 'pi pi-fw pi-user-edit'
      },
    ]
  },
  {
    label: <Link to="/Menu">Menu</Link>,
    icon: 'pi pi-fw pi-home'
  },
  {
    label: <Link to="/Login">Cerrar Sesion</Link>,
    icon: 'pi pi-fw pi-power-off'
  }
];

export const BarraMenu = () => {
  return (
    <div>
      <div>
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
};
