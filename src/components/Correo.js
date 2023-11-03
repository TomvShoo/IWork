import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import styles from "./Correo.module.css";
import axios from "axios";

const Correo = () => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const token = localStorage.getItem("accessToken");
    const emailData = {
      recipient: recipient,
      subject: subject,
      message: message,
    }

    try {
      axios.post('https://api-iwork.onrender.com/email/send',
        emailData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log('Mensaje enviado con exito',response.data);
      })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.correoContainer}>
      <h5>Enviar Mensaje</h5>
      <span>
        <InputText
          className={styles.correoInputText}
          placeholder="Destinatario"
          autoResize
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </span>

      <span>
        <InputText
          className={styles.correoInputText}
          placeholder="Asunto"
          autoResize
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </span>

      <span>
        <InputTextarea
          className={styles.correoInputText}
          placeholder="Mensaje"
          autoResize
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </span>

      <Button label="Enviar correo" onClick={sendEmail} rounded />
    </div>
  );
};

export default Correo;
