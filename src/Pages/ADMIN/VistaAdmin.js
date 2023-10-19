import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import BarraMenuAdmin from "../../components/BarraMenuAdmin";
import BotonAdmin from "../../components/BotonesAdmin";
import Correo from "../../components/Correo";

const AdminView = () => {
  const [searchText, setSearchText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleDelete = (message) => {
    console.log("Mensaje eliminado:", message);
  };

  const handleSearch = () => {
    console.log("Buscar mensajes:", searchText);
  };

  return (
    <div className="vistaAdminContainer">
      <BarraMenuAdmin />
      <div className="vistaAdminData">
        <BotonAdmin />
        <div>
          <div>
            <div>
              <InputText
                placeholder="Buscar mensajes"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <Button
                label="Buscar"
                icon="pi pi-search"
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
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
        </div>
        <div>
          <Correo />
        </div>
      </div>
    </div>
  );
};

export default AdminView;
