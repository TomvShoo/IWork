import React from "react";
import { Rating } from "primereact/rating";
import BarraMenuCli from "../../components/BarraMenuCli";
import Footer from "../../components/Footer";
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
