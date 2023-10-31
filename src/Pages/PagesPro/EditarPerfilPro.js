import { Link } from "react-router-dom";
import * as React from "react";
import { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import axios from "axios";
// Estilos
import styles from "./EditarPerfilPro.module.css";
import { useForm } from "react-hook-form";


export const EditarPerfilPro = () => {
  const [portafolio, SetPortafolio] = useState(null);
  const [selectedProfesion, setSelectedProfesion] = useState(null);
  const [imagen, setImages] = useState("");
  const [imagenActual, setImagenActual] = useState("");
  const [profesiones, setProfesiones] = useState([]);
  const token = localStorage.getItem("accessToken");
  const { setError, formState: { errors } } = useForm();
  const [newData, setNewData] = useState({
    nombre: "",
    apellido: "",
    nroTelefono: "",
    contrasena: "",
    confirmarContrasena: "",
  });
  const [newPortafolio, setNewPortafolio] = useState({
    descripcion: "",
    certificaciones: "",
    imagen: "",
  })

  useEffect(() => {
    axios.get("http://localhost:4000/profesion")
      .then((response) => {
        setProfesiones(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error al traer los datos", error);
      });
  }, [])

  useEffect(() => {
    const decodedToken = parseJwt(token);
    const userId = decodedToken.id;
    axios.get(`http://localhost:4000/portafolio/profesional/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log("Datos del portafolio:", response.data);
        SetPortafolio(response.data)
      })
      .catch((error) => {
        console.error("Error al obtener los datos del portafolio", error);
      });
  }, [])

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64Image = event.target.result;
      setImages(base64Image);
    };
    reader.onerror = (error) => {
      console.error("Error al leer el archivo:", error);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleGuardarCambios = (e) => {
    e.preventDefault();
    asignarProfesion();
    editarDatosPerfil(e);
  }

  const asignarProfesion = () => {
    if (selectedProfesion) {
      const idProfesion = selectedProfesion.id_profesion;
      axios.post(`http://localhost:4000/profesional/asignar-profesion/${idProfesion}`,
        {
          id_profesion: idProfesion,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error al asignar la profesión:", error);
          console.log(error.response.data);
        });
    } else {
      console.error("No se ha seleccionado ninguna profesión.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  }

  const handlePortafolioChange = (e) => {
    const { name, value } = e.target;
    setNewPortafolio({ ...newPortafolio, [name]: value });
  }

  const editarDatosPerfil = async (e) => {
    e.preventDefault();
    const decodedToken = parseJwt(token);
    const userId = decodedToken.id;
    const updateData = {};

    if (newData.nombre !== "") updateData.nombre = newData.nombre;
    if (newData.apellido !== "") updateData.apellido = newData.apellido;
    if (newData.nroTelefono !== "") updateData.nombnroTelefonore = newData.nonroTelefonombre;
    if (newData.contrasena !== "" && newData.contrasena === newData.confirmarContrasena) {
      updateData.contrasena = newData.contrasena;
      updateData.confirmarContrasena = newData.confirmarContrasena;
    } else if (newData.contrasena !== "" && newData.contrasena !== newData.confirmarContrasena) {
      setError("confirmarContrasena", {
        type: "manual",
        message: "las contraseñas no coinciden",
      });
      return;
    }

    try {
      const response = await axios.patch(`http://localhost:4000/profesional/${userId}`, updateData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      console.log("datos editados correctamentes", response.data);
    } catch (error) {
      console.error("Error al editar los datos del perfil", error)
    }
  }

  const editarPortafolio = async (e) => {
    e.preventDefault();
    const idPortafolio = portafolio.data[0].id_portafolio;
    const updatePortafolio = {};

    if (newPortafolio.descripcion !== "") updatePortafolio.descripcion = newPortafolio.descripcion;
    if (newPortafolio.certificaciones !== "") updatePortafolio.certificaciones = newPortafolio.certificaciones;
    // if (newPortafolio.imagen !== "") updatePortafolio.imagen = newPortafolio.imagen;
    if (imagen) {
      updatePortafolio.imagen = imagen.split(",")[1];
    }

    try {
      const response = await axios.patch(`http://localhost:4000/portafolio/${idPortafolio}`, updatePortafolio, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      console.log('Portafolio editado correctamente', response.data);
    } catch (error) {
      console.error('Error al editar el portafolio', error);
    }
  }

  function parseJwt(token) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  }
  return (
    <div className={styles.editarPerfilProContainer}>
      <div className={styles.menuBackNav}>
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
      <div className={styles.contentEditar}>
        <div className={styles.editarData}>
          <div className={styles.editarProfesion}>
            <span>Seleccionar una profesión:</span>
            <Dropdown
              value={selectedProfesion}
              onChange={(e) => setSelectedProfesion(e.value)}
              options={profesiones}
              optionLabel="nombre_profesion"
              placeholder="Seleccionar profesión"
              className="w-full md:w-14rem"
            />
          </div>
          <form onSubmit={(e) => { editarDatosPerfil(e) }}>
            <div className={styles.editarInputs}>
              <InputText onChange={handleInputChange} name="nombre" value={newData.nombre} placeholder="Cambiar nombre"></InputText>
              <InputText onChange={handleInputChange} name="apellido" value={newData.apellido} placeholder="Cambiar apellido"></InputText>
              <InputText onChange={handleInputChange} name="nroTelefono" value={newData.nroTelefono} placeholder="Cambiar teléfono" type="phone"></InputText>
              <InputText onChange={handleInputChange} name="contrasena" value={newData.contrasena} placeholder="Nueva contraseña"></InputText>
              <InputText onChange={handleInputChange} name="confirmarContrasena" value={newData.confirmarContrasena} placeholder="Verificar contraseña"></InputText>
            </div>
          </form>
          <div className={styles.editarButton}>
            <Link to="/PerfilProfesional">
              <Button
                className={styles.botonGuardar}
                label="Guardar cambios"
                icon="pi pi-save"
                rounded
                onClick={handleGuardarCambios}
              />
            </Link>
          </div>
        </div>
        <div className={styles.editarPortafolio}>
          <form onSubmit={(e) => { editarPortafolio(e) }}>
            <div className={styles.contentEditarPortafolio}>
              <span>Descripción</span>
              <InputText
                name="descripcion"
                value={newPortafolio.descripcion}
                onChange={handlePortafolioChange}
                className={styles.inputTextArea}
                autoResize
              />
            </div>
            <div className={styles.contentEditarPortafolio}>
              <span>Certificados</span>
              <InputText
                name="certificaciones"
                value={newPortafolio.certificaciones}
                onChange={handlePortafolioChange}
                className={styles.inputTextArea}
                autoResize
              />
            </div>
            <div className={styles.agregarButtons}>
              <div>
                {imagen && (
                  <div className={styles.agregarImagenes}>
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
              </div>
            </div>

            <div className={styles.agregarImagenes}>
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </div>
            <div className={styles.editarButton}>
              <Button
                label="Guardar cambios portafolio"
                icon="pi pi-image"
                type="file"
                accept="image/*"
                rounded
              />
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};
