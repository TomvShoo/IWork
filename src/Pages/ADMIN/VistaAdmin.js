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
import MensajeReclamo from "./MensajeReclamo";

const AdminView = () => {
  const [reclamos, setReclamos] = useState([]);
  const [profesion, setProfesiones] = useState([]);
  const [nuevaProfesion, setNuevaProfesion] = useState("");
  const [selectedReclamo, setSelectedReclamo] = useState(null);
  const [mensajeVisible, setMensajeVisible] = useState(false);

  useEffect(() => {
    axios.get("https://api-iwork.onrender.com/profesion")
      .then((response) => {
        setProfesiones(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error al traer los datos", error);
      });

    axios.get('https://api-iwork.onrender.com/resena')
      .then((response) => {
        const reclamos = response.data.filter((resena) => resena.tipo === "reclamo");
        setReclamos(reclamos);
        console.log(reclamos);
      });
  }, []);

  const handleMensaje = (reclamo) => {
    setSelectedReclamo(reclamo);
    setMensajeVisible(true);
  }
  const onHide = () => {
    setMensajeVisible(false);
  }

  const handleDelete = (resena) => {
    const resenaId = resena.resenaId;
    axios.delete(`https://api-iwork.onrender.com/resena/${resenaId}`)
    .then((response) =>{
      console.log("Mensaje eliminado:", response.data);
      const updateReclamos = reclamos.filter(item => item.resenaId !== resenaId);
      setReclamos(updateReclamos);
    });
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
            <span>Gestor de mensajes:</span>
            <div className={styles.buscarMensajes}>
            </div>
            <DataTable paginator rows={5} value={reclamos}>
              <Column field="tipo" header="Asunto" />
              <Column field="escritor.nombre" header="Cliente" />
              <Column field="escritor.correo" header="Correo Cliente" />
              <Column field="CreatedAt" header="Fecha" />
              <Column
                body={(reclamo) => (
                  <Button
                    label="Ver Reclamo"
                    onClick={() => handleMensaje(reclamo)}
                  />
                )}
              />
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
      {mensajeVisible && selectedReclamo && (
        <MensajeReclamo
          visible={mensajeVisible}
          onHide={onHide}
          reclamoData={selectedReclamo}
        />
      )}
    </div>
  );
};

export default AdminView;
