import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import SwitchButton from "../components/SwitchButton";
import axios from "axios";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
// primeicons
import 'primeicons/primeicons.css';
// Estilos
import "../style.css";

export const Login = () => {

  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
  });

  const [loginMessage, setLoginMessage] = useState({ text: "", style: "" });
  const [selectedUserType, setSelectedUserType] = useState("cliente");
  const navigate = useNavigate();
  const mensaje = useRef(null);

  useEffect(() => {
    if (loginMessage.text) {
      mensaje.current.show({
        severity: loginMessage.severity,
        summary: loginMessage.text,
        life: 4000,
      });
    }
  }, [loginMessage]);

  useEffect(() => {
    if (loginMessage.severity === "success") {
      const timer = setTimeout(() => {
        navigate("/MenuPro");
      }, 5000);

      // Limpia el temporizador si el componente se desmonta antes de que ocurra la redirección
      return () => clearTimeout(timer);
    }
  }, [loginMessage, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserTypeChange = (userType) => {
    setSelectedUserType(userType);
  };


  const handlesubmit = async (e) => {
    e.preventDefault();

    console.log("Tipo de cuenta seleccionado:", selectedUserType);
    // inicio de sesion con axios
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        correo: formData.correo,
        contrasena: formData.contrasena,
        tipoCuenta: selectedUserType,
      });

      // manejo de respuesta exitosa
      if (response.data.success) {
        console.log("inicio de sesion exitoso :D");
        console.log("Respuesta del servidor:", response.data);
        localStorage.setItem("token", response.data.data);
        setLoginMessage({ text: "Inicio de sesión exitoso", style: "success" });

        if (selectedUserType === "cliente") {
          navigate("/PerfilCliente");
        } else if (selectedUserType === "profesional") {
          navigate("/PerfilProfesional");
        }
        // return navigate('/MenuPro')
      } else {
        console.log("Error en el inicio de sesion");
        setLoginMessage({
          text: "Error en el inicio de sesión",
          style: "error",
        });
      }
      // const token = response.data.token;
    } catch (error) {
      // manejo de errores
      console.error("error en el inicio de sesion", error);
      setLoginMessage({ text: "Error en el inicio de sesión", style: "error" });
    }
  };

  // Front-End
  return (
    <div className="loginContainer">
      <div className="loginLogo">
        <h1>iWork</h1>
      </div>

      <div className="loginData">
        <div className="loginSwitchButton">
          <SwitchButton
            onUserTypeChange={handleUserTypeChange}
            setSelectedUserType={setSelectedUserType}
          />
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
          <Toast className="" ref={(el) => (mensaje.current = el)} />
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
     
