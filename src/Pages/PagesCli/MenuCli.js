
import React, { useState } from "react";
import { Avatar } from "primereact/avatar";
import BarraMenuCli from "../../components/BarraMenuCli";
import ModalAdvertenciaCli from "../../components/ModalAdvertenciaCli";
import Footer from "../../components/Footer";
import { Rating } from "primereact/rating";
import styles from "./MenuCli.module.css"

export const MenuCli = () => {
  return (
    <div className="menuContainer">
      <div>
        <ModalAdvertenciaCli />
      </div>
      <div>
        <BarraMenuCli />
      </div>

      <div className={styles.menuCartas}>
        <div className="tituloCard">
          <h3>Profesionales mejor calificados</h3>
        </div>
        {/* <div className="calificadosPro">
          <div>
            <Avatar
              label="U"
              style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
              shape="circle"
            />
            <span>Nombre Apellido</span>
          </div>
          <div>
            <span>Profesión</span>
            <Rating value={4} readOnly cancel={false} />
          </div>
        </div> */}
        <div className={styles.cartaCalificados}>
          <div className={styles.cartaBody}>
            <div className={styles.cartaProfesional}>
              <Avatar
                label="U"
                style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                shape="circle"
              />
              <span>Nombre Apellido</span>
              <div>
                <span>Profesión</span>
                <Rating value={4} readOnly cancel={false} />
              </div>
            </div>
          </div>


          <div className={styles.cartaBody}>
            <div className={styles.cartaProfesional}>
              <Avatar
                label="U"
                style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                shape="circle"
              />
              <span>Nombre Apellido</span>
              <div>
                <span>Profesión</span>
                <Rating value={4} readOnly cancel={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="menuCartas">
        <div className="tituloCard">
          <h3>Servicios</h3>
        </div>
        <div className="servicios">
          <div className="contentServicios">
            <div>
              <i className="pi pi-user"></i>
            </div>
            <span>Carpinteria</span>

            <div>
              <i className="pi pi-user"></i>
            </div>
            <span>Electricista</span>

            <div>
              <i className="pi pi-user"></i>
            </div>
            <span>Gasfiteria</span>

            <div>
              <i className="pi pi-user"></i>
            </div>
            <span>Construccion</span>

            <div>
              <i className="pi pi-user"></i>
            </div>
            <span>Construccion</span>

            <div>
              <i className="pi pi-user"></i>
            </div>
            <span>Construccion</span>
          </div>
        </div>
      </section> */}
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
