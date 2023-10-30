import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import SwitchButton from "../components/SwitchButton";
import axios from "axios";
import styles from "./Login.module.css";
import jwt_decode from "jwt-decode";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    emailError: '',
    passwordError: '',
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loginMessage, setLoginMessage] = useState({ text: "", style: "" });
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

  // useEffect(() => {
  //   if (loginMessage.severity === "success") {
  //     const timer = setTimeout(() => {
  //       navigate("/MenuPro");
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [loginMessage, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleUserTypeChange = (userType) => {
  //   setSelectedUserType(userType);
  // };

  const handlesubmit = async () => {
    setValidationErrors({
      emailError: '',
      passwordError: '',
    });
  
    if (!formData.correo) {
      setValidationErrors((prevState) => ({
        ...prevState,
        emailError: 'Ingresar un correo electrónico.',
      }));
      return;
    }
    if (!formData.contrasena) {
      setValidationErrors((prevState) => ({
        ...prevState,
        passwordError: 'Ingresa una contraseña.',
      }));
      return;
    }
    
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        correo: formData.correo,
        contrasena: formData.contrasena,
      });

      if (response.data.success) {
        console.log("inicio de sesion exitoso :D");
        console.log("Respuesta del servidor:", response.data);
        localStorage.setItem("accessToken", response.data.data);
        setLoginMessage({ text: "Inicio de sesión exitoso", style: "success" });
      
        const token = response.data.data;
        const decodedToken = jwt_decode(token)
        const userType = decodedToken.role;

        if (userType === "cliente") {
          navigate("/PerfilCliente");
        } else if (userType === "profesional") {
          navigate("PerfilProfesional")
        }
      } else {
        
      }
    } catch (error) {
      console.error("error en el inicio de sesion", error);
      setLoginMessage({ text: "Error en el inicio de sesión", style: "error" });

      if (error.response) {
        if (error.response.status === 401) {
          setLoginMessage({
            text: error.response.data.message,
            style: "error",
          });
        } else if (error.response.status === 400) {
          setLoginMessage({
            text: error.response.data.message,
            style: "error",
          });
        } else {
          console.error("Error en el inicio de sesión", error);
          setLoginMessage({
            text: "Error en el inicio de sesión",
            style: "error",
          });
        }
      } else {
        console.error("Error en el inicio de sesión", error);
        setLoginMessage({
          text: "Error en el inicio de sesión",
          style: "error",
        });
      }
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLogo}>
        <h1>iWork</h1>
      </div>

      <div className={styles.loginData}>
        {/* <div className={styles.loginSwitchButton}>
          <SwitchButton
            onUserTypeChange={handleUserTypeChange}
            setSelectedUserType={setSelectedUserType}
          />
        </div> */}

        <form className={styles.loginForm} onSubmit={handleSubmit(handlesubmit)}>
          <InputText
            type="email"
            placeholder="Correo electrónico"
            name="correo"
            {...register('correo', { required: true })}
            value={formData.correo}
            onChange={handleInputChange}
          ></InputText>
          {errors.correo && <span>Correo es requerido</span>}
          {/* color: #ff6f6f */}
          <InputText
            placeholder="Contraseña"
            type="password"
            name="contrasena"
            {...register('contrasena', { required: true })}
            value={formData.contrasena}
            onChange={handleInputChange}
          ></InputText>
          {errors.contrasena && <span>Constraseña es requerida</span>}
          <Link to="/MenuPro"></Link>
          <Toast ref={(el) => (mensaje.current = el)} />
          <Button className={styles.button} label="Iniciar sesión" type="submit" variant="contained" rounded />
        </form>
      </div>

      <div className={styles.createNewUser}>
        <p>¿No tienes una cuenta?</p>
        <Link className={styles.link} to="/Registro">
          <div className={styles.loginRegisterButton}>
            <Button className={styles.button} label="Crear cuenta" outlined rounded />
          </div>
        </Link>
      </div>
    </div>
  );
};
