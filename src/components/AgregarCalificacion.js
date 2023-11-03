import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Calificacion from "./Rating";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import axios from "axios";
import styles from "./AgregarCalificacion.module.css";

const BotonCalificacion = () => {
  const [visible, setVisible] = useState(false);
  const [calificacion, setCalificacion] = useState(null);
  const [resena, setResena] = useState("");
  const [tipoResena, setTipoResena] = useState(null);
  let { id } = useParams();
  const tipoResenaOptions = [
    { label: "Comentario", value: "comentario" },
    { label: "Reclamo", value: "reclamo" },
  ]


  const handleRateChange = (value) => {
    setCalificacion(value);
  };

  const enviarCalificacion = async () => {
    const data = {
      calificacion: calificacion,
      resena: resena,
      tipo: tipoResena,
      profesionalId: parseInt(id),
    };

    try {
      const response = await axios.post(
        "https://api-iwork.onrender.com/resena/subirResena",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.data) {
        console.log(data);
      } else {
        console.error("hubo un error al mandar la reseña");
      } // Cierra el diálogo después de enviar la calificación
    } catch (error) {
      console.error("Error al comunicarse con el servidor", error);
      console.log(data);
    }
  };

  const cancelarModal = () => {
    setVisible(false);
  };

  const footerContent = (
    <div className={styles.footer}>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={cancelarModal}
        className="p-button-text"
      />
      <Button
        label="Enviar"
        icon="pi pi-check"
        onClick={enviarCalificacion}
        autoFocus
      />
    </div>
  );

  return (
    <div className={styles.agregarCalificacionContainer}>
      <Button
        className="botonesPerfilProfesional"
        label="Dejar Calificación"
        icon="pi pi-star"
        rounded
        onClick={() => setVisible(true)}
      />
      <Dialog
        className={styles.dialogo}
        header="¡Deja tu calificación!"
        visible={visible}
        footer={footerContent}
        onHide={() => setVisible(false)}
      >
        <div className={styles.contentModal}>
          <div>
            <Dropdown
              value={tipoResena}
              options={tipoResenaOptions}
              placeholder="Selecione el tipo de reseña"
              onChange={(e) => setTipoResena(e.value)}
            />
          </div>
          <div className={styles.calificacion}>
            <div>
              <span>Califica al profesional:</span>
            </div>
            <Calificacion onRateChange={handleRateChange} />
          </div>
          <div className={styles.resena}>
            <span>Escribe una reseña:</span>
            <div className={styles.divInput}>
              <InputTextarea
                className={styles.inputText}
                value={resena}
                onChange={(e) => setResena(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default BotonCalificacion;
