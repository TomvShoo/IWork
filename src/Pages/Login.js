import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import { InputText } from "primereact/inputtext";
import SwitchButton from "../components/SwitchButton";

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
    margin: "0rem 0rem",
  },
  input: {
    display: "flex",
    flexDirection: "column",
    margin: "0rem 0rem"
  },
  h4: {
    margin: "1rem",
  },
  inputText: {
    margin: "1rem 3rem",
  },
  button: {
    padding: "0.85rem 5rem",
    margin: "2rem 0rem",
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
