import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import Calificacion from "../../components/Rating";
import BotonesRedes from "../../components/BotonesRedes";
import ImageCarousel from "../../components/Carrusel";
import { Chip } from 'primereact/chip';
import BotonCalificacion from "../../components/AgregarCalificacion";
import Footer from "../../components/Footer";
import BarraMenuCli from "../../components/BarraMenuCli";

const VistaPerfilPro = () => {
    const [profesionalData, setProfesionalData] = useState(null);
    const [portafolio, setPortafolio] = useState(null);
    const location = useLocation(); // Usa useLocation para obtener la URL actual
    const { id } = useParams();

    useEffect(() => {
        const fetchProfesionalData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/profesional/id/${id}`); // Utiliza el parámetro de la URL en la solicitud GET
                setProfesionalData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProfesionalData();
    }, [id]);

    const handleWhatsAppClick = () => {
        if (profesionalData && profesionalData.nroTelefono) {
            const whatsappURL = `https://api.whatsapp.com/send?phone=569${profesionalData.nroTelefono}`;
            window.open(whatsappURL, "_blank");
        }
    };

    const handleGmailClick = () => {
        if (profesionalData && profesionalData.correo) {
          const mailtoLink = `mailto:${profesionalData.correo}`;
          window.open(mailtoLink, "_blank");
        }
      };

    return (
        <div className="perfilProfesionalContainer">
            <BarraMenuCli />

            <div className="vistaPerfilProfesional">
                <div className="dataPerfilProfesional">
                    <div className="headerPerfilProfesional">
                        <Avatar label="P" size="xlarge" shape="circle" />
                        <Calificacion />
                    </div>

                    <div className="descriptionPerfilProfesional">
                        {profesionalData && (
                            <div>
                                <h3>
                                    {profesionalData.nombre} {profesionalData.apellido}
                                </h3>
                                <div>
                                    <h4>Profesiones:</h4>
                                    {profesionalData.tipoProfesion && profesionalData.tipoProfesion.length > 0 ? (
                                        <ul>
                                            {profesionalData.tipoProfesion.map((profesion, index) => (
                                                <Chip key={index} label={profesion.nombre_profesion} className="p-mr-2" />
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>Aún no se han asignado profesiones</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="contactoPerfilProfesional">
                        <div className="botonesRedes">
                            <Button
                                className="botonRed"
                                icon="pi pi-envelope"
                                label="Gmail"
                                severity="danger"
                                onClick={handleGmailClick}
                                rounded
                            />
                            <Button
                                className="botonRed"
                                icon="pi pi-whatsapp"
                                label="WhatsApp"
                                severity="success"
                                onClick={handleWhatsAppClick}
                                rounded
                            />
                        </div>
                    </div>

                    <div className="botonesEditarAgregar">
                        <BotonCalificacion />
                    </div>
                </div>

                <div className="portafolioProfesional">
                    <ImageCarousel
                        images={
                            portafolio && portafolio.data ? [portafolio.data[0].imagen] : []
                        }
                    />
                </div>
            </div>

            <div className="vistaPerfilProfesionalDatos">
                <div className="dataPerfilProfesional">
                    {/* Mostrar la descripción y los certificados del profesional */}
                    <div className="portafolioProfesionalBloque">
                        <div>
                            <h5>Descripción</h5>
                        </div>
                        <div>
                            <span>
                                {portafolio && portafolio.data && portafolio.data[0].descripcion
                                    ? portafolio.data[0].descripcion
                                    : "Cargando..."}
                            </span>
                        </div>
                    </div>
                    <div className="portafolioProfesionalBloque">
                        <div>
                            <h5>Certificados</h5>
                        </div>
                        <div>
                            <span>
                                {portafolio &&
                                    portafolio.data &&
                                    portafolio.data[0].certificaciones
                                    ? portafolio.data[0].certificaciones
                                    : "Cargando..."}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="portafolioProfesionalBloque">
                    <div>
                        <h5>Reseñas</h5>
                    </div>
                    <div className="resenas">
                        <span className="resenaBloque">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            vitae erat at justo dictum molestie. Nam venenatis vestibulum
                            justo, in interdum diam. Morbi non pharetra ligula. Sed lobortis
                            ac mi nec ultrices. Mauris sollicitudin vulputate dui a luctus.
                            Aenean non condimentum dolor, at rutrum enim. Donec auctor dapibus
                            leo, quis congue sem accumsan vel. Ut non accumsan quam. Nullam.
                        </span>
                        <span className="resenaBloque">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            vitae erat at justo dictum molestie. Nam venenatis vestibulum
                            justo, in interdum diam. Morbi non pharetra ligula. Sed lobortis
                        </span>
                        <span className="resenaBloque">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            vitae erat at justo dictum molestie. Nam venenatis vestibulum
                            justo, in interdum
                        </span>
                        <span className="resenaBloque">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                            vitae erat at justo dictum molestie. Nam venenatis vestibulum
                            justo, in interdum diam. Morbi non pharetra ligula. Sed lobortis
                            ac mi nec ultrices. Mauris sollicitudin vulputate dui a luctus.
                            Aenean non condimentum dolor, at rutrum enim. Donec auctor dapibus
                            leo, quis congue sem accumsan vel. Ut non accumsan quam. Nullam.
                        </span>
                        <span className="resenaBloque">Lorem ipsum dolor sit!</span>
                    </div>
                </div>
            </div>

            <div className="divFooter">
                <Footer />
            </div>
        </div>
    );
}

export default VistaPerfilPro