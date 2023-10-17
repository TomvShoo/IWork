import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import "../style.css"; // Importa tu archivo de estilos CSS

const Correo = () => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    // Lógica para enviar el correo
  };

  return (
    <div className="correo-container">
      <div className="p-fluid">
        <div className="p-inputgroup">
          <span className="p-float-label">
            <InputText id="recipient" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            <label htmlFor="recipient">Destinatario</label>
          </span>
        </div>
        <div className="p-inputgroup">
          <span className="p-float-label">
            <InputText id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            <label htmlFor="subject">Asunto</label>
          </span>
        </div>
        <div className="p-inputgroup">
          <span className="p-float-label">
            <InputTextarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
            <label htmlFor="message">Mensaje</label>
          </span>
        </div>
        <Button label="Enviar Correo" onClick={sendEmail} />
      </div>
    </div>
  );
};

export default Correo;
