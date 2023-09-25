import { Link } from "react-router-dom";
import * as React from "react";
import { InputText } from "primereact/inputtext";
import SwitchButton from "../components/SwitchButton";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import { Button } from "@mui/material";
// Estilos
import "../style.css";

const Estilo = {
  // inputs: {
  //   margin: "2.5rem 0rem",
  // },
  // input: {
  //   display: "flex",
  //   flexDirection: "column",
  // },
  // h4: {
  //   margin: "1rem",
  // },
  // inputText: {
  //   margin: "0.25rem 3rem",
  // },
  // button: {
  //   padding: "0.85rem 1.25rem",
  //   margin: "1.25rem 0rem",
  // },
  // registrar: {
  //   margin: "2rem 0rem",
  // },
};

export const Login = () => {
  return (
    <div className="containerLogin">
      <div>
        <h1 className="tittle">I Work</h1>
      </div>

      <div className="switchButton">
        <SwitchButton />
      </div>

      <div>
        <div className="input">
          <InputText placeholder="Correo electrónico"></InputText>
        </div>
        <div className="input">
          <InputText placeholder="Contraseña" type="password"></InputText>
        </div>
      </div>

      <div className="loginContainer">
        <Link to="/MenuPro">
          <Button variant="contained" size="large">Iniciar sesión</Button>
        </Link>
      </div>

      <div className="registerContainer">
        <p className="registerText">¿No tienes una cuenta?</p>
        <Link to="/Registro">
          <Button size="small">Crear cuenta</Button>
        </Link>
      </div>
    </div>
  );
};
