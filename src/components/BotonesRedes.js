import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Estilo = {
    button: {
        display: "flex",
        alignItems: "center",
        margin: "2rem 0rem",
        justifyContent: "space-evenly",
    },
}
export default function BotonesRedes() {

  const handleWhatsAppClick = () => {
    // URL de WhatsApp con el número de teléfono que desea
    const whatsappURL = 'https://api.whatsapp.com/send?phone=569';
    window.open(whatsappURL, '_blank');
  };

  const handleGmailClick = () => {
    // Dirección de correo electrónico predefinida
    const email = 'tucorreo@gmail.com';

    // Crear el enlace "mailto"
    const mailtoLink = `mailto:${email}`;

    // Abrir el enlace en una nueva pestaña o ventana
    window.open(mailtoLink, '_blank');
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