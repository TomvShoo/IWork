import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import SwitchButton from "../components/SwitchButton";
import axios from "axios";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
// Estilos
import "../style.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    // inicio de sesion con axios
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        correo: formData.correo,
        contrasena: formData.contrasena,
      });

      // manejo de respuesta exitosa
      if (response.data.success) {
        console.log("inicio de sesion exitoso :D");
        console.log("Respuesta del servidor:", response.data);
        localStorage.setItem("token", response.data.data);
        return navigate("/MenuPro");
      } else {
        console.log("Error en el inicio de sesion");
        // return navigate('/MenuPro')
      }
      // const token = response.data.token;
    } catch (error) {
      // manejo de errores
      console.error("error en el inicio de sesion", error);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginLogo">
        <h1>iWork</h1>
      </div>

      <div className="loginData">
        <div className="loginSwitchButton">
          <SwitchButton />
        </div>
        <form className="loginForm" onSubmit={handlesubmit}>
          <InputText
            placeholder="Correo electrónico"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
          ></InputText>
          <InputText
            placeholder="Contraseña"
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleInputChange}
          ></InputText>
          <Link to="/MenuPro"></Link>
          <Button className="button" type="submit" variant="contained" rounded>
            Iniciar sesión
          </Button>
        </form>
      </div>

      <div className="createNewUser">
        <p>¿No tienes una cuenta?</p>

        <Link to="/Registro">
          <div className="loginRegisterButton">
            <Button className="button" outlined rounded>
              Crear cuenta
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};
