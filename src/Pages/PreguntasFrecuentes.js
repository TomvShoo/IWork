import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";
import styles from "./PreguntasFrecuentes.module.css";

export const PreguntasFrecuentes = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.preguntasFrecuentesContainer}>
      <div className={styles.navMenu}>
        <Button onClick={handleGoBack} severity="secondary" text>
          <i
            className="pi pi-arrow-circle-left"
            style={{ fontSize: "1.75rem", color: "rgba(0, 0, 0, 0.5)" }}
          ></i>
        </Button>
        <span style={{ color: "#6C757D" }}>Preguntas frecuentes</span>
      </div>

      <div className={styles.preguntasLista}>
        <h5>Preguntas Frecuentes</h5>
        <p className={styles.parrafo}>
          Aquí podrás encontrar alguna de las preguntas frecuentes o FAQ que
          iWork ha documentado para una mejor experiencia de usuario y
          transparencia con el mismo. Las preguntas frecuentes serán
          actualizadas a medida que los usuarios se vean con la necesidad de
          solventar dudas acerca del uso del servicio.
        </p>
        <Accordion activeIndex={0}>
          <AccordionTab header="01. Acerca del manual de uso">
            <p className={styles.parrafo}>
              Para que entiendas el funcionamiento de nuestros servicio
              disponemos del manual de uso de usuario en los siguientes enlaces
              descargables.
            </p>
            <p className={styles.parrafo}>
              Descargar:&nbsp;
              <a href="ruta/al/archivo.pdf" download>
                Manual de usuario cliente
              </a>
              .
            </p>
            <p className={styles.parrafo}>
              Descargar:&nbsp;
              <a href="ruta/al/archivo.pdf" download>
                Manual de usuario profesional
              </a>
              .
            </p>
          </AccordionTab>
          <AccordionTab header="02. Acerca de denuncias o reclamos">
            <p className={styles.parrafo}>
              Si un usuario profesional ha faltado a alguno de los puntos
              mencionados en las condiciones de uso del servicio:
            </p>
            <p className={styles.parrafo}>
              1.- Dirígete al perfil del usuario profesional que deseas
              denunciar.
            </p>
            <p className={styles.parrafo}>
              2.- Presiona el botón "Dejar calificación" y en la ventana
              emergente selecciona el tipo de reseña "reclamo".
            </p>
            <p className={styles.parrafo}>
              3.- Escribe tu reclamo y envíalo para que nuestros administradores
              puedan revisarlo e investigar el caso.
            </p>
          </AccordionTab>
          <AccordionTab header="03. ¿Puedo tener o cambiar a una cuenta de otro tipo de usuario?">
            <p className={styles.parrafo}>
              Actualmente solo se permite tener una cuenta de un tipo, sea
              cuenta de tipo cliente y/o profesional.
            </p>
          </AccordionTab>
          <AccordionTab header="04. Políticas de Privacidad y Condiciones de Uso">
            <p className={styles.parrafo}>
              Puedes visualizar y/o descargar nuestras políticas de privacidad y
              condiciones de uso.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};
