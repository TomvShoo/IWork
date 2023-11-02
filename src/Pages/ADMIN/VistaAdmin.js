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
import Grafico from "./Grafico";

const AdminView = () => {
  const [searchText, setSearchText] = useState("");
  const [messages, setMessages] = useState([]);
  const [profesion, setProfesiones] = useState([]);
  const [nuevaProfesion, setNuevaProfesion] = useState("");

  useEffect(() => {
    axios
      .get("https://api-iwork.onrender.com/profesion")
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
        .post("https://api-iwork.onrender.com/profesion", { nombre_profesion: nuevaProfesion })
        .then((response) => {
          console.log("Profesión agregada con éxito", response.data);
          axios.get("https://api-iwork.onrender.com/profesion")
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
        <div className={styles.vistaAdminContent1}>
          <BotonAdmin />
          <div className={styles.adminBuscarMensajes}>
            <span>Gestor de mensajes;</span>
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
        <div>
          <div className={styles.vistaAdminContent2}>
            <div className={styles.correoAdmin}>
              <Correo />
            </div>
            <div className={styles.graficoAdmin}>
              <Grafico />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
