import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { Rating } from "primereact/rating";
import Calificacion from "../../components/Rating";
import Carrusel from "../../components/Carrusel";
import BarraMenuCli from "../../components/BarraMenuCli";
import ModalAdvertenciaCli from "../../components/ModalAdvertenciaCli";
import CartasMenu from "../../components/CartasMenu";
import Footer from "../../components/Footer";
import BotonCalificacion from "../../components/AgregarCalificacion";
import styles from "./MenuCli.module.css";

import SheshoImage from "../../Images/Shesho.jpeg";

export const MenuCli = () => {
  return (
    <div className={styles.menuContainer}>
      {/* <ModalAdvertenciaCli /> */}

      <div className={styles.navMenu}>
        <BarraMenuCli />
      </div>

      <section className={styles.cartasSection}>
        <div className={styles.titleSection}>
          <h3>Profesionales mejor calificados</h3>
        </div>

        <div className={styles.cartaContainer}>
          <div className={styles.cartaProfesional}>
            <img src={SheshoImage} alt="Shesho" className={styles.imagen} />

            <div className={styles.cartaDatos}>
              <span>Nombre Apellido</span>
              <Rating value={4} readOnly cancel={false} />
              <div>
                <span>Aquí van las etiquetas</span>
              </div>
            </div>
          </div>

          <div className={styles.cartaProfesional}>
            <img src={SheshoImage} alt="Shesho" className={styles.imagen} />

            <div className={styles.cartaDatos}>
              <span>Nombre Apellido</span>
              <Rating value={4} readOnly cancel={false} />
              <div>
                <span>Aquí van las etiquetas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.divFooter}>
        <Footer />
      </div>
    </div>
  );
};
