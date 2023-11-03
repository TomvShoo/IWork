import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import axios from "axios";
import styles from "./BotonesAdmin.module.css";

const BotonAdmin = () => {
  const [users, setUsers] = useState([]);
  const [profesionales, setProfesionales] = useState([]);

  useEffect(() => {
    axios.get("https://api-iwork.onrender.com/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error al traer los datos de usuarios", error);
      });
    axios.get("https://api-iwork.onrender.com/profesional")
      .then((response) => {
        setProfesionales(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error al traer los datos de profesionales", error);
      });
  }, []);

  const handleDeleteUser = (user) => {
    const deleteEndpoint = user.tipoCuenta === "cliente" ? `https://api-iwork.onrender.com/users/${user.id}` : `https://api-iwork.onrender.com/profesional/${user.id}`;

    axios.delete(deleteEndpoint)
      .then((response) => {
        console.log("Usuario eliminado con éxito", response.data);
        if (user.tipoCuenta === "cliente") {
          axios.get("https://api-iwork.onrender.com/users")
            .then((response) => {
              setUsers(response.data);
            })
            .catch((error) => {
              console.log("Error al traer los datos de usuarios", error);
            });
        } else {
          axios.get("https://api-iwork.onrender.com/profesional")
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
      <h5>Listado de usuarios</h5>
      <div className={styles.buscarBotonesAdmin}>
        <Button label="Usuario" icon="pi pi-search" />
        <InputText placeholder="Nombre de usuario" />
      </div>
      <div className={styles.listado}>
        <DataTable className={styles.tabla} paginator rows={5} value={[...users, ...profesionales]}>
          <Column field="nombre" header="Nombre" />
          <Column field="correo" header="Correo" />
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