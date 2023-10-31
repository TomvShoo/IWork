import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Calificacion from "./Rating";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import { useParams } from "react-router-dom";
// Estilos
import styles from "./AgregarCalificacion.module.css";

const BotonCalificacion = () => {
  const [visible, setVisible] = useState(false);
  const [calificacion, setCalificacion] = useState(null);
  const [resena, setResena] = useState("");
  let { id } = useParams();

  const handleRateChange = (value) => {
    setCalificacion(value);
  };

  const enviarCalificacion = async () => {
    const data = {
      calificacion: calificacion,
      resena: resena,
      profesionalId: parseInt(id),
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/resena/subirResena",
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
                // autoResize
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
