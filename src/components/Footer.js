import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer style={{ background: "#5572D1", color: "white", padding: "1rem", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ textAlign: "left" }}>
          <h4>Síguenos en Redes Sociales</h4>
          <a href="[Enlace a Facebook]" style={{ color: "white", marginRight: "10px" }}><FacebookIcon /></a>
          <a href="[Enlace a Twitter]" style={{ color: "white", marginRight: "10px" }}><TwitterIcon /></a>
          <a href="[Enlace a Instagram]" style={{ color: "white", marginRight: "10px" }}><InstagramIcon /></a>
        </div>
        <div style={{ textAlign: "right" }}>
          <h4>Contacto</h4>
          <p>Nrtdevops@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;