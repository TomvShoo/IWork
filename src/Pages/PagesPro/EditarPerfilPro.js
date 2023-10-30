import { Link } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import axios from "axios";
// Estilos
import styles from "./EditarPerfilPro.module.css";

export const EditarPerfilPro = () => {
  const [selectedProfesion, setSelectedProfesion] = useState(null);
  const [profesiones, setProfesiones] = useState([]);
  const token = localStorage.getItem("accessToken");
  const usuarioId = token ? JSON.parse(atob(token.split(".")[1])).id : null;

  useEffect(() => {
    axios.get("http://localhost:4000/profesion")
      .then((response) => {
        setProfesiones(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error al traer los datos", error);
      });
  }, [])

  const asignarProfesion = () => {
    if (selectedProfesion) {
      const idProfesion = selectedProfesion.id_profesion;
      axios.post(`http://localhost:4000/profesional/asignar-profesion/${idProfesion}`,
          {
            id_profesion: idProfesion,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error al asignar la profesión:", error);
          console.log(error.response.data);
        });
    } else {
      console.error("No se ha seleccionado ninguna profesión.");
    }
  };

  return (
    <div className={styles.editarPerfilProContainer}>
      <div className={styles.menuBackNav}>
        <Link to="/PerfilProfesional">
          <Button severity="secondary" text>
            <i
              className="pi pi-arrow-circle-left"
              style={{ fontSize: "1.75rem", color: "rgba(0, 0, 0, 0.5)" }}
            ></i>
          </Button>
        </Link>
        <span style={{ color: "#6C757D" }}>Editar perfil</span>
      </div>

      <div className={styles.editarData}>
        <div className={styles.editarProfesion}>
          {/* <span>Seleccionar una profesión:</span> */}
          <Dropdown
            value={selectedProfesion}
            onChange={(e) => setSelectedProfesion(e.value)}
            options={profesiones}
            optionLabel="nombre_profesion"
            placeholder="Seleccionar profesión"
            className="w-full md:w-14rem"
          />
        </div>
        <div className={styles.editarInputs}>
          <InputText placeholder="Cambiar nombre"></InputText>
          <InputText placeholder="Cambiar apellido"></InputText>
          <InputText placeholder="Cambiar teléfono" type="phone"></InputText>
          <InputText placeholder="Nueva contraseña"></InputText>
          <InputText placeholder="Verificar contraseña"></InputText>
        </div>
        <div className={styles.editarButton}>
          <Link to="/PerfilProfesional">
            <Button
              className={styles.botonGuardar}
              label="Guardar cambios"
              icon="pi pi-save"
              rounded
              onClick={asignarProfesion}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
