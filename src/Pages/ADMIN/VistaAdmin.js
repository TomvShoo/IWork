import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import BarraMenuAdmin from "../../components/BarraMenuAdmin";
import BotonAdmin from "../../components/BotonesAdmin";
import Correo from "../../components/Correo";
import styles from "./VistaAdmin.module.css";
import axios from "axios";

const AdminView = () => {
  const [searchText, setSearchText] = useState("");
  const [messages, setMessages] = useState([]);
  const [profesion, setProfesiones] = useState([]);
  const [nuevaProfesion, setNuevaProfesion] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/profesion")
      .then((response) => {
        setProfesiones(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error al traer los datos", error);
      });
  }, []);

  const handleDelete = (message) => {
    console.log("Mensaje eliminado:", message);
  };

  const handleSearch = () => {
    console.log("Buscar mensajes:", searchText);
  };

  const handleAddProfesion = () => {
    if (nuevaProfesion.trim() !== "") {
      axios
        .post("http://localhost:4000/profesion", { nombre_profesion: nuevaProfesion })
        .then((response) => {
          console.log("Profesión agregada con éxito", response.data);
          // Realizar una nueva llamada GET para actualizar la lista de profesiones
          axios
            .get("http://localhost:4000/profesion")
            .then((response) => {
              setProfesiones(response.data);
            })
            .catch((error) => {
              console.log("Error al traer los datos", error);
            });
        })
        .catch((error) => {
          console.error("Error al agregar la profesión", error);
        });
    }
  };

  const handleDeleteProfesion = () => {

  }

  return (
    <div className={styles.vistaAdminContainer}>
      <BarraMenuAdmin />
      <div className={styles.vistaAdminData}>
        <BotonAdmin />
        <div className={styles.adminBuscarMensajes}>
          <div className={styles.buscarMensajes}>
            <InputText
              placeholder="Buscar mensajes"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <Button label="Buscar" icon="pi pi-search" onClick={handleSearch} />
          </div>
          <DataTable value={messages}>
            <Column field="subject" header="Asunto" />
            <Column field="sender" header="Remitente" />
            <Column field="date" header="Fecha" />
            <Column
              body={(rowData) => (
                <Button
                  label="Eliminar"
                  onClick={() => handleDelete(rowData)}
                />
              )}
            />
          </DataTable>
        </div>
        <Correo />

        <div className={styles.vistaAdminProfesion}>
        <InputText
            placeholder="Agregar profesion"
            value={nuevaProfesion}
            onChange={(e) => setNuevaProfesion(e.target.value)} 
          />
          <Button label="Agregar" onClick={handleAddProfesion} />
          <DataTable paginator rows={5} value={profesion}>
            <Column field="nombre_profesion" header="Profesiones">
              <Column
                body={(rowData) => (
                  <Button icon="pi pi-check" className="p-button-success" rounded onClick={() => handleDeleteProfesion(rowData)} />
                )}
              />
            </Column>

          </DataTable>
          <div className={styles.botonesAdmin}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
