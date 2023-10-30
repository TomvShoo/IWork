import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styles from "./BotonesAdmin.module.css";
import axios from "axios";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const BotonAdmin = () => {
  const [users, setUsers] = useState([]);
  const [profesionales, setProfesionales] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error al traer los datos de usuarios", error);
      });
    axios.get("http://localhost:4000/profesional")
      .then((response) => {
        setProfesionales(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error al traer los datos de profesionales", error);
      });
  }, []);

  const handleDeleteUser = (user) => {
    const deleteEndpoint = user.tipoCuenta === "cliente" ? `http://localhost:4000/users/${user.id}` : `http://localhost:4000/profesional/${user.id}`;
  
    axios
      .delete(deleteEndpoint)
      .then((response) => {
        console.log("Usuario eliminado con éxito", response.data);
        if (user.tipoCuenta === "cliente") {
          axios.get("http://localhost:4000/users")
            .then((response) => {
              setUsers(response.data);
            })
            .catch((error) => {
              console.log("Error al traer los datos de usuarios", error);
            });
        } else {
          axios.get("http://localhost:4000/profesional")
            .then((response) => {
              setProfesionales(response.data);
            })
            .catch((error) => {
              console.log("Error al traer los datos de profesionales", error);
            });
        }
      })
      .catch((error) => {
        console.log("Error al eliminar el usuario", error);
      });
  };

  return (
    <div className={styles.botonesAdminContainer}>
      <div className={styles.buscarBotonesAdmin}>
        <Button label="Usuario" icon="pi pi-search" />
        <InputText placeholder="Nombre de usuario" />
      </div>
      <div className={styles.botonesAdmin}>
        <Button icon="pi pi-times" className="p-button-danger" rounded />
        <Button icon="pi pi-check" className="p-button-success" rounded />
      </div>
      <div>
        <DataTable paginator rows={5} value={[...users, ...profesionales]}>
          <Column field="nombre" header="Nombre" />
          <Column field="correo" header="Correo"/>
          <Column field="tipoCuenta" header="Tipo de cuenta" />
          <Column
            body={(rowData) => (
              <Button
                icon="pi pi-times"
                className="p-button-danger"
                onClick={() => handleDeleteUser(rowData)}
                rounded
              />
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};
export default BotonAdmin;