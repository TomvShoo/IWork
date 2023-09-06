import { Outlet, Link } from "react-router-dom";
// import React from "react";
import * as React from "react";
import Alert from "@mui/material/Alert";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
import { Password } from "primereact/password";
import SwitchButton from "./SwitchButton";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import { Button } from "@mui/material";

const Estilo = {
  tittle: {
    margin: "5rem",
  },
  switchButton: {
    margin: "1rem",
  },
  inputs: {
    margin: "2rem 0rem",
  },
  input: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0rem"
  },
  inputText: {
    margin: "0rem 3rem",
  },
  button: {
    padding: "0.75rem",
    margin: "1rem 0rem",
  },
};

export const Login = () => {
  return (
    <container>
      <h1 style={Estilo.tittle}>I Work</h1>

      <div style={Estilo.switchButton}>
        <SwitchButton />
      </div>

      <div style={Estilo.inputs}>
        <div style={Estilo.input}>
          <h4>Correo</h4>
          <InputText style={Estilo.inputText}></InputText>
        </div>
        <div style={Estilo.input}>
          <h4>Contraseña</h4>
          <InputText style={Estilo.inputText}></InputText>
        </div>
        {/* <Password style={Estilo.input}></Password> */}
      </div>

      <div>
        <Link to="/Menu">
          <Button variant="contained" style={Estilo.button}>
            Iniciar Sesión
          </Button>
          {/* <Button style={Estilo.button} label="Iniciar Sesión"></Button> */}
        </Link>
      </div>

      <div>
        <p>¿No tienes una cuenta?</p>
        <Link to="/Registro">
          <Button>Registrarse</Button>
          {/* <Button label="Regístrate aquí" link /> */}
        </Link>
      </div>
    </container>
  );
};
