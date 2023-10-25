import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import ImageCarousel from "../../components/Carrusel";
import { Chip } from 'primereact/chip';
import BotonCalificacion from "../../components/AgregarCalificacion";
import Footer from "../../components/Footer";
import BarraMenuCli from "../../components/BarraMenuCli";
import CalificacionPro from "../../components/RatingPro";
import "./VistaPro.css"

const VistaPerfilPro = () => {
    const [profesionalData, setProfesionalData] = useState(null);
    const [portafolio, setPortafolio] = useState(null);
    const [promedioCalificacion, setPromedioCalificacion] = useState(0);
    const [resenas, setResenas] = useState(null);
    // const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        const fetchProfesionalData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/profesional/id/${id}`);
                setProfesionalData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const fetchPortafolioData = async () => {
            try {
                const portafolioResponse = await axios.get(`http://localhost:4000/portafolio/profesional/${id}`);
                setPortafolio(portafolioResponse.data);
                console.log(portafolioResponse.data);
            } catch (error) {
                console.error('Error fetching portafolio data:', error);
            }
        };

        const fetchResenas = async () => {
            try {
                const resenasResponse = await axios.get(`http://localhost:4000/resena/profesional/${id}`);
                setResenas(resenasResponse.data);
                console.log(resenasResponse.data);

                const sum = resenasResponse.data.reduce((total, resena) => total + resena.calificacion, 0);
                const promedio = resenasResponse.data.length > 0 ? sum / resenasResponse.data.length : 0;
                setPromedioCalificacion(promedio);
            } catch (error) {
                console.error('Error fetching resenas data:', error);
            }
        }

        fetchProfesionalData();
        fetchPortafolioData();
        fetchResenas();
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
                        <CalificacionPro promedio={promedioCalificacion} />
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
                        <BotonCalificacion profesionalId={id} />
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

            <div className="vistaPerfilProfesionalResena">
                <div className="dataPerfilProfesional">
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
                        {resenas && resenas.map((resena, index) => (
                            <span key={index} className="resenaBloque">
                                <div className="resenaContent">
                                    <div className="ContentUser">
                                        <Avatar
                                            label="U"
                                            style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
                                            shape="circle"
                                        />
                                        <span>{resena.nombreUsuario}</span>
                                    </div>
                                    <CalificacionPro promedio={resena.calificacion} />
                                </div>
                                <span>{resena.resena}</span>
                            </span>
                        ))}
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