import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Calificacion from "./Rating";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";

const BotonCalificacion = () => {
  const [visible, setVisible] = useState(false);
  const [calificacion, setCalificacion] = useState(null);
  const [resena, setResena] = useState("");

  const enviarCalificacion = () => {
    const data = {
      calificacion: calificacion,
      resena: resena,
    };

    // Cambia la URL por la ruta correcta en tu backend
    axios
      .post("poner link aqui", data)
      .then((response) => {
        console.log(response.data); // Aquí puedes manejar la respuesta del backend
        // Por ejemplo, puedes actualizar el estado con las calificaciones y reseñas del profesional
      })
      .catch((error) => {
        console.error("Error al enviar la calificación:", error);
      });

    setVisible(false); // Cierra el diálogo después de enviar la calificación
  };

  const cancelarModal = () => {
    setVisible(false); // Cierra el diálogo al presionar Cancelar
  };

  const footerContent = (
    <div>
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
    <div className="card flex justify-content-center">
      <Button
        className="botonesPerfilProfesional"
        label="Dejar Calificación"
        icon="pi pi-star"
        rounded
        onClick={() => setVisible(true)}
      />
      <Dialog
        header="¡Deja tu calificación!"
        visible={visible}
        footer={footerContent}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <div className="contentModal">
          <div className="resena">
            <div>
              <span>Califica al profesional:</span>
            </div>
            <Calificacion onRate={(e) => setCalificacion(e.value)} />
          </div>
          <div className="resena">
            <div>
              <span>Escribe una reseña:</span>
            </div>
            <div>
              <InputTextarea
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
