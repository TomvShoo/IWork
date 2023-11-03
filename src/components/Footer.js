import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ textAlign: "left" }}>
          <h4>Nuestras Redes</h4>
          <div className={styles.footerRedes}>
            <a
              href="[Enlace a Facebook]"
              style={{ color: "white", marginRight: "10px" }}
            >
              <i
                className="pi pi-facebook"
                style={{ fontSize: "1.5rem", color: "black" }}
              ></i>
            </a>
            <a
              href="[Enlace a Twitter]"
              style={{ color: "white", marginRight: "10px" }}
            >
              <i
                className="pi pi-twitter"
                style={{ fontSize: "1.5rem", color: "black" }}
              ></i>
            </a>
            <a
              href="[Enlace a Instagram]"
              style={{ color: "white", marginRight: "10px" }}
            >
              <i
                className="pi pi-instagram"
                style={{ fontSize: "1.5rem", color: "black" }}
              ></i>
            </a>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <h4>Contacto</h4>
          <p>nrtdevops@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
