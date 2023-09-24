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

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success" style={Estilo.button} startIcon={<WhatsAppIcon />}>
        WhatsApp
      </Button>
      <Button variant="contained" color="error" style={Estilo.button} startIcon={<EmailIcon />}>
        Gmail
      </Button>
    </Stack>
  );
}