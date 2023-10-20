import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import Calificacion from "../../components/Rating";
import Carrusel from "../../components/Carrusel";
import BarraMenuCli from "../../components/BarraMenuCli";
import ModalAdvertenciaCli from "../../components/ModalAdvertenciaCli";
import CartasMenu from "../../components/CartasMenu";
// import Footer from "../../components/Footer";

import { Rating } from "primereact/rating";
import BotonCalificacion from "../../components/AgregarCalificacion";

export const MenuCli = () => {
  return (
    <div className="menuContainer">
      <div>
        <ModalAdvertenciaCli />
      </div>
      <div>
        <BarraMenuCli />
      </div>
      <div className="menuCartasMenu">
        {/* <CartasMenu /> */}
      </div>
      <section className="menuCartas">
        <div className="tituloCard">
          <h3>Profesionales mejor calificados</h3>
        </div>
        <div className="servicios">
          <div className="calificadosPro">
            <div>
              <div className="cartaMenu">
                <div className="cartaHeader">
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
                </div>
              </div>
            </div>

            <div>
              <div className="cartaMenu">
                <div className="cartaHeader">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="menuCartas">
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
      </section>

      {/* <div style={Estilos.divLinks}>
        <Link>
          <Button>Cercanos a ti</Button>
        </Link>
        <Link>
          <Button>Filtrar</Button>
        </Link>
        <ModalAdvertenciaCli />
      </div>
      <Card>
        <div style={Estilos.carta}>
          <div>
            <Avatar label="P" shape="circle" />
          </div>
          <div>
            <h3>Nombre Apellido</h3>
            <h4>Profesión</h4>
          </div>
          <div>
            <Calificacion />
          </div>
        </div>
        <div>
          <Carrusel />
        </div>
      </Card> */}
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};
