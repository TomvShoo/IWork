import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';  

const Estilos = {
    navbar: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#005694"
    },
    div: {
        margin: "5px",
    },
    sidebar: {

    },
}

export const Menu = () =>{
    const [visible, setVisible] = useState(false);

  return (
    <header style={Estilos.navbar}>
        <div style={Estilos.div}>
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Sidebar</h2>
                <ul>
                    <li><Link to="/">Menu principal</Link></li>
                    <li><Link to="/Perfil">Perfil</Link></li>
                    <li><Link to="/Login">Cerrar Sesion</Link></li>
                </ul>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            
        </div>
        <div style={Estilos.div}>
            <InputText placeholder="Search" />
        </div>
        <Outlet/>
    </header>
  );
}; 