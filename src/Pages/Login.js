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
    margin: "2.5rem 0rem",
  },
  input: {
    display: "flex",
    flexDirection: "column",
  },
  h4: {
    margin: "1rem",
  },
  inputText: {
    margin: "0.25rem 3rem",
  },
  button: {
    padding: "0.85rem 1.25rem",
    margin: "1.25rem 0rem",
  },
  registrar: {
    margin: "2rem 0rem",
  },
  fondo: {
    background: "",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    minHeight: "100vh"
  },
};

export const Login = () => {
  return (
    <div style={Estilo.fondo}> 
      <div>
        <h1 style={Estilo.tittle}>I Work</h1>

        <div style={Estilo.switchButton}>
          <SwitchButton />
        </div>

        <div style={Estilo.inputs}>
          <div style={Estilo.input}>
            <InputText style={Estilo.inputText} placeholder="Correo electronico"></InputText>
          </div>
          <div style={Estilo.input}>
            <InputText style={Estilo.inputText} placeholder="Contraseña"></InputText>
          </div>
        </div>

        <div>
          <Link to="/Menu">
            <Button variant="contained" style={Estilo.button}>
              Iniciar Sesión
            </Button>
          </Link>
        </div>

        <div style={Estilo.registrar}>
          <p>¿No tienes una cuenta?</p>
          <Link to="/Registro">
            <Button >Registrarse</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
