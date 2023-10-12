import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
// primeicons
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import BotonRegistro from "../components/BotonRegistro";
// import { ToggleButton } from "primereact/togglebutton";
// import Modal from "react-bootstrap/Modal";

export const Registro = () => {
  const [formData, setformData] = useState({
    nombre: "",
    apellido: "",
    nroTelefono: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: "",
    tipoCuenta: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // verificar la contraseña y la confirmacion de la contraseña
    if (formData.contrasena !== formData.confirmarContrasena) {
      console.log("las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/auth/register", {
        nombre: formData.nombre,
        apellido: formData.apellido,
        nroTelefono: formData.nroTelefono,
        correo: formData.correo,
        contrasena: formData.contrasena,
        tipoCuenta: formData.tipoCuenta,
      });

      if (response.data.success) {
        console.log("Registro exitoso :D");
        navigate("/");
      } else {
        console.log("Registro fallido");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("Solicitud incorrecta: Verifica los datos ingresados");
        console.log("error en el registro", error);
      } else {
        console.log("error en el registro", error);
      }
    }
  };

  return (
    <div className="registerContainer">
      <div className="registerBackLogin">
        <Link to="/">
          <Button severity="secondary" text>
            <i
              className="pi pi-arrow-circle-left"
              style={{ fontSize: "1.75rem", color: "rgba(0, 0, 0, 0.5)" }}
            ></i>
          </Button>
        </Link>
      </div>

      <div className="registerData">
        <form className="registerForm" onSubmit={handleSubmit}>
          <div className="registerInputs">
            <div className="registerName">
              <InputText
                placeholder="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              ></InputText>
              <InputText
                placeholder="Apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
              ></InputText>
            </div>

            <div className="registerNum">
              <InputText
                placeholder="Numero de Telefono"
                name="nroTelefono"
                value={formData.nroTelefono}
                onChange={handleInputChange}
                maxLength={11}
              ></InputText>
            </div>

            <div className="registerEmailPass">
              <InputText
                placeholder="Correo"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
              ></InputText>
              <InputText
                placeholder="Contraseña"
                name="contrasena"
                value={formData.contrasena}
                onChange={handleInputChange}
              ></InputText>
              <InputText
                placeholder="Verificar contraseña"
                name="confirmarContrasena"
                value={formData.confirmarContrasena}
                onChange={handleInputChange}
              ></InputText>
            </div>
          </div>

          <div className="registerSelectContainer">
            <div className="registerTypeProfile">
              <p>Selecciona el tipo de cuenta:</p>
              <div>
                <SelectButton
                  options={[
                    { label: "Cliente", value: "cliente" },
                    { label: "Profesional", value: "profesional" },
                  ]}
                  value={formData.tipoCuenta}
                  onChange={(e) =>
                    setformData({ ...formData, tipoCuenta: e.value })
                  }
                />
              </div>
            </div>

            <div className="registerButton">
              <BotonRegistro />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
