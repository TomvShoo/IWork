import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import "../style.css";
import axios from 'axios';
import { Button } from "primereact/button";
import Busqueda from "./resultadoBusqueda";

export default function BarraMenuCli() {
  const [searchQuery, setSearchQuery] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const cerrarSesion = () => {
    localStorage.removeItem("accessToken");
  };

  const menu = [
    {
      label: (
        <Link to="/MenuCli" className="link">
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
            <Link to="/PerfilCliente" className="link">
              Ver Perfil
            </Link>
          ),
          icon: "pi pi-eye",
        },
        {
          label: (
            <button to="/EditarPerfilCli" className="link">
              Editar Perfil
            </button>
          ),
          icon: "pi pi-pencil",
        },
      ],
    },
    {
      label: (
        <Link to="/" onClick={cerrarSesion} className="link">
          Cerrar sesion
        </Link>
      ),
      icon: "pi pi-fw pi-power-off",
    },
  ];

  const logo = (
    <img
      alt="logo"
      src="https://cdn-icons-png.flaticon.com/512/11107/11107584.png"
      height="40"
      className="mr-2"
    ></img>
  );

  const MarcaCli = (
    <div style={{ display: "flex", alignItems: "center" }}>
      {logo}
      <span>iWork</span>
    </div>
  );

  const onSearch = (e) => {
    setSearchQuery(e.target.value);
    fetchResults(e.target.value); // Llama a la función fetchResults cuando se realice la búsqueda
  };

  // const fetchResults = (query) => {
  //   axios.get(`http://localhost:4000/profesional/search?query=${query}`)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data: ', error);
  //     });
  // };
  const fetchResults = (query) => {
    axios.get(`http://localhost:4000/profesional/search?query=${query}`)
      .then((response) => {
        console.log(response.data);
        setResultadosBusqueda(response.data); // Guarda los resultados de la búsqueda en el estado
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  };

  const barra = (
    <div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          placeholder="Buscar"
          value={searchQuery}
          onChange={onSearch}
        />
      </span>
    </div>
  );
  const onHide = () => {
    setShowModal(false); // Oculta el modal al llamar a setShowModal con el valor false
  };
  
  return (
    <div>
      <Menubar model={menu} start={MarcaCli} end={barra} />
      {/* Renderiza el componente ResultadoModal si hay resultados */}
      {resultadosBusqueda.length > 0 && (
        <Busqueda
          resultados={resultadosBusqueda}
          visible={showModal}
          onHide={onHide} // Cambiado de setShowModal(true) a setShowModal(false)
        />
      )}
    </div>
  );
}