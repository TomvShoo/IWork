import { Outlet, Link } from "react-router-dom";
import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import SwitchButton from "./SwitchButton";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

const Estilo = {
  divlogin: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    margin: "30px",
  },
};

export const Login = () => {
  return (
    <div>
      <h1>I Work</h1>

      <SwitchButton />

      <div style={Estilo.divlogin}>
        <h4>Correo</h4>
        <p>
          <InputText></InputText>
        </p>

        <h4>Contraseña</h4>
        <p>
          <Password></Password>
        </p>
      </div>

      <div>
        <Link to="/Menu">
          <Button style={Estilo.button} label="Iniciar Sesión"></Button>
        </Link>
      </div>

      <div>
        <p>¿No tienes una cuenta?</p>
        <Link to="/Registro">
          <Button label="Regístrate aquí" link />
        </Link>
      </div>
    </div>
  );
};
