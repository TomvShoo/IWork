import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
// primeicons
import "primeicons/primeicons.css";
// Estilos
import styles from "./BotonRegistro.module.css";


export default function BotonRegistro() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setVisible(false);
  };

  const footerContent = (
    <div className="cancel">
      <Button
        label="Cancelar"
        // icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Link to="/">
        <Button
          label="Aceptar"
          // icon="pi pi-check"
          onClick={handleAccept}
          autoFocus
        />
      </Link>
    </div>
  );

  return (
    <div className={styles.botonRegistroComponent}>
      <Button label="Registrarse" onClick={() => setVisible(true)} rounded />
      <Dialog
        className={styles.dialogoTerCon}
        header="Términos y Condiciones de Uso"
        visible={visible && !accepted}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <p>Última actualización: Octubre de 2023</p>
        <p>
          Por favor, lea cuidadosamente estos Términos y Condiciones de Uso
          antes de utilizar nuestros servicios proporcionados por iWork. Al
          acceder o utilizar la nuestros servicios, usted acepta estar sujeto a
          estos Términos. Si no está de acuerdo con alguna parte de los
          términos, entonces no tendrá permiso para acceder a los servicios.
        </p>
        <p>1. Información Recolectada</p>
        <p>
          Al utilizar nuestra Aplicación, podemos recopilar cierta información
          personal de usted, incluyendo, pero no limitándose a su nombre,
          dirección de correo electrónico, número de teléfono e imágenes. Esta
          información es necesaria para proporcionar nuestros servicios y
          mejorar su experiencia como usuario.
        </p>
        <p>2. Uso de la Información</p>
        <p>
          Nos comprometemos a proteger su privacidad y a no vender, compartir ni
          divulgar su información personal a terceros sin su consentimiento,
          excepto según lo establecido en nuestra Política de Privacidad.
        </p>
        <p>3. Tipos de Usuarios</p>
        <p>
          En nuestra Aplicación, existen dos tipos de usuarios: clientes y
          profesionales. Los clientes pueden utilizar la Aplicación para buscar,
          contactar u obtener información sobre los profesionales y los
          servicios que ofrecen. Los profesionales tienen la capacidad de crear
          un portafolio visual cargando imágenes de sus trabajos. Estos
          portafolios son públicos y accesibles para los usuarios de la
          Aplicación. Los profesionales son los únicos responsables de la
          autenticidad y precisión de la información proporcionada en sus
          portafolios.
        </p>
        <p>4. Responsabilidad del Usuario</p>
        <p>
          Usted es responsable de mantener la confidencialidad de su cuenta y de
          todas las actividades que ocurran bajo su cuenta. Usted se compromete
          a notificarnos inmediatamente de cualquier uso no autorizado de su
          cuenta o cualquier otra violación de seguridad.
        </p>
        <p>5. Contenido del Usuario</p>
        <p>
          Usted comprende y acepta que es el único responsable del contenido que
          comparte a través de nuestra Aplicación, incluyendo textos, imágenes y
          cualquier otra información ("Contenido del Usuario"). Nosotros no
          somos responsables del Contenido del Usuario publicado por usted o
          cualquier otro usuario.
        </p>
        <p>6. Cambios en los Términos y Condiciones</p>
        <p>
          Nos reservamos el derecho de modificar o reemplazar estos Términos en
          cualquier momento. Si una revisión es importante, intentaremos
          proporcionar un aviso de al menos 30 días antes de que los nuevos
          términos entren en vigencia. Lo alentamos a revisar periódicamente
          estos Términos para estar informado acerca de las actualizaciones.
        </p>
        <p>7. Contacto</p>
        <p>
          Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor
          contáctenos en nrtdevops@gmail.com.
        </p>
        <p>
          Al utilizar nuestra Aplicación, usted acepta estar legalmente obligado
          por estos Términos y Condiciones. Gracias por su comprensión y
          cooperación.
        </p>
      </Dialog>
    </div>
  );
}
