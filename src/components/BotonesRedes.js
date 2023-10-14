import React, { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import axios from 'axios';

const Estilo = {
    button: {
        display: "flex",
        alignItems: "center",
        margin: "2rem 0rem",
        justifyContent: "space-evenly",
    },
}
export default function BotonesRedes() {

  const [usuario, setUsuario] = useState(null);
  // obtener el token del almacenamiento local
  const token = localStorage.getItem('token');


  useEffect(() => {
    if(token) {
      //se realiza la solicitud al servidor 
      axios.get('http://localhost:4000/auth/perfil', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.error('error al obtener los datos del usuario', error);
      });
    } 
  
  }, [token])
  
  const handleWhatsAppClick = () => {
    if(usuario.nroTelefono) {
      const whatsappURL = `https://api.whatsapp.com/send?phone=569${usuario.nroTelefono}`;
      // URL de WhatsApp con el número de teléfono que desea
      window.open(whatsappURL, '_blank');
    }
  };

  // const handleGmailClick = () => {
  //   if (usuario.correo) {
  //     // // Dirección de correo electrónico predefinida
  //     // const email = ${usuario.correo};
  //     // Crear el enlace "mailto"
  //     const mailtoLink = `mailto:${correo}`;
  
  //     // Abrir el enlace en una nueva pestaña o ventana
  //     window.open(mailtoLink, '_blank');

  //   }
  // };
  const handleGmailClick = () => {
    if (usuario.correo) {
      const mailtoLink = `mailto:${usuario.correo}`;
      window.open(mailtoLink, '_blank');
    }
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" style={Estilo.button} startIcon={<WhatsAppIcon />} onClick={handleWhatsAppClick}>
        WhatsApp
      </Button>
      <Button variant="contained" color="error" style={Estilo.button} startIcon={<EmailIcon />} onClick={handleGmailClick}>
        Gmail
      </Button>
    </Stack>
  );
}