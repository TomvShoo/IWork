import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import "../../style.css";
import jwt_decode from "jwt-decode";
import axios from "axios";

const AgregarPortfolio = () => {
  const [imagen, setImages] = useState("");
  const [descripcion, setDescription] = useState("");
  const [certificaciones, setCertificates] = useState("");
  const [profesionalId, setProfessionalId] = useState("");

  useEffect(() => {
    // obtener token
    const token = localStorage.getItem("accessToken");
    if (token) {
      // decodificar token
      const decodedToken = jwt_decode(token);
      // console.log('Decoded Token:', decodedToken);
      setProfessionalId(decodedToken.id);
      // console.log('Professional ID:', decodedToken.id);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Image = event.target.result;
      // setImages((prevImages) => [...prevImages, base64Image]);
      setImages(base64Image);
    };

    reader.onerror = (error) => {
      console.error("Error al leer el archivo:", error);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    console.log(file);
  };

  const handleSave = async () => {
    const requestData = {
      descripcion,
      certificaciones,
      imagen: imagen.split(",")[1],
      //   profesionalId,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/portafolio/upload",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.data.success) {
        console.log("Se guardó exitosamente en la base de datos");
        console.log(requestData);
      } else {
        console.error(
          "Hubo un error al guardar el portafolio en la base de datos"
        );
      }
    } catch (error) {
      console.error("Error al comunicarse con el servidor", error);
      console.log(requestData);
    }
  };

  const footer = (
    <div className="footer">
      <Button
        label="Guardar cambios"
        icon="pi pi-save"
        rounded
        onClick={handleSave}
      />
    </div>
  );

  return (
    <div className="agregarPortafolioContainer">
      <div className="menuBackLogin">
        <Link to="/PerfilProfesional">
          <Button severity="secondary" text>
            <i
              className="pi pi-arrow-circle-left"
              style={{ fontSize: "1.75rem", color: "rgba(0, 0, 0, 0.5)" }}
            ></i>
          </Button>
        </Link>
        <span style={{ color: "#6C757D" }}>Editar perfil</span>
      </div>

      <Card footer={footer} className="agregarCarta">
        <div className="agregarData">
          <div className="agregarInputs">
            <span>Descripción</span>
            <InputTextarea
              autoResize
              value={descripcion}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="agregarInputs">
            <span>Certificados</span>
            <InputTextarea
              autoResize
              value={certificaciones}
              onChange={(e) => setCertificates(e.target.value)}
            />
          </div>
        </div>

        <div>
          {imagen && (
            <div>
              <span>Imágenes seleccionadas:</span>
              <img
                src={imagen}
                alt={`Image`}
                style={{
                  maxWidth: "200px",
                  maxHeight: "200px",
                  marginRight: "10px",
                }}
              />
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <Button
            label="Subir imágenes"
            severity="secondary"
            text
            type="file"
            accept="image/*"
            rounded
            onChange={handleImageUpload}
          />
        </div>
      </Card>
    </div>
  );
};

export default AgregarPortfolio;
