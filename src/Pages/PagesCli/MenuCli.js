import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Rating } from "primereact/rating";
import BarraMenuCli from "../../components/BarraMenuCli";
import Footer from "../../components/Footer";
import styles from "./MenuCli.module.css";
import axios from "axios";
import { Chip } from "primereact/chip";
import { Helmet } from "react-helmet";
import logo from "../../Images/logo.png";

export const MenuCli = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://api-iwork.onrender.com/profesion").then((response) => {
      setData(response.data);
    });
  }, []);

  const redirigirPerfilProfesional = (idProfesional) => {
    navigate(`/perfil-profesional/${idProfesional}`);
  };

  const mejoresProfesionales = [];
  if (data) {
    const profesiones = data
      .map((item) => {
        if (item.profesionales && item.profesionales.length > 0) {
          return {
            nombre_profesion: item.nombre_profesion,
            profesional: {
              nombre: item.profesionales[0].nombre,
              apellido: item.profesionales[0].apellido,
              id: item.profesionales[0].id,
            },
            resena: item.profesionales[0].resena,
          };
        }
        return null;
      })
      .filter(Boolean);

    profesiones.forEach((profesion) => {
      const promedioCalificaciones = profesion.resena.reduce(
        (total, res) => total + res.calificacion,
        0
      );
      const promedio = promedioCalificaciones / profesion.resena.length;

      const mejorResena = profesion.resena.find(
        (res) => res.calificacion > promedio
      );

      if (mejorResena) {
        mejoresProfesionales.push({
          nombre_profesion: profesion.nombre_profesion,
          nombre_profesional: profesion.profesional.nombre,
          apellido_profesional: profesion.profesional.apellido,
          calificacion: mejorResena.calificacion,
          id: profesion.profesional.id,
        });
      }
    });
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.navMenu}>
        <BarraMenuCli />
      </div>

      <div className={styles.menuCliView}>
        <section className={styles.aboutSection}>
          <div className={styles.logoAbout}>
            <img
              src={logo}
              className={styles.logo}
              alt="iwork logo"
              draggable="false"
              loading="eager"
            />
          </div>

          <div className={styles.titles}>
            <div className={styles.textSection}>
              <div className={styles.titleSection}>
                <h3>Contratación</h3>
              </div>
              <p className={styles.parrafo}>
                Descrubre a tus futuros colaboradores a traves de perfiles
                detallados, con calificacion, portafolios y certificaciones.
              </p>
            </div>

            <div className={styles.textSection}>
              <div className={styles.titleSection}>
                <h3>Ofrecimientos</h3>
              </div>
              <p className={styles.parrafo}>
                iWork no solo conecta, también genera oportunidades de empleo al
                destacar tu perfil en el mundo digital.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.cartasSection}>
          <div className={styles.titleSection}>
            <h3>Profesionales mejor calificados</h3>
          </div>

          <div>
            <Helmet>
              <script
                type="text/javascript"
                async
                defer
                src="https://cdn.survio.com/static/widgets/web-widget.js"
                data-backgroundColor="#88E2FF"
                data-color="#000000"
                data-text="Dejanos tu comentario"
                data-url="https://www.survio.com/survey/d/C2W7I7F7X3E6I1B4K"
              ></script>
            </Helmet>
          </div>

          <div className={styles.cartaContainer}>
            {mejoresProfesionales.map((profesional, index) => (
              <div
                className={styles.cartaProfesional}
                key={index}
                onClick={() => redirigirPerfilProfesional(profesional.id)}
              >
                {/* <img src={SheshoImage} alt="Shesho" className={styles.imagen} /> */}
                <div className={styles.cartaDatos}>
                  {profesional &&
                  profesional.nombre_profesional &&
                  profesional.apellido_profesional ? (
                    <span>{`${profesional.nombre_profesional} ${profesional.apellido_profesional}`}</span>
                  ) : null}

                  {profesional && profesional.calificacion ? (
                    <Rating
                      value={profesional.calificacion}
                      readOnly
                      cancel={false}
                    />
                  ) : null}
                  {profesional && profesional.nombre_profesion ? (
                    <div>
                      <Chip key={index} label={profesional.nombre_profesion} />
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.divFooter}>
        <Footer />
      </div>
    </div>
  );
};
