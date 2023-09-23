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
  switchButton: {
    margin: "2rem 0rem",
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
};

export const Login = () => {
  return (
    <div style={Estilo.fondo} className="fondo">
      <div>
        <h1 style={Estilo.tittle} className="tittle">I Work</h1>
      </div>

      <div style={Estilo.switchButton}>
        <SwitchButton />
      </div>

      <div style={Estilo.inputs}>
        <div style={Estilo.input}>
          <InputText
            style={Estilo.inputText}
            placeholder="Correo electrónico"
          ></InputText>
        </div>
        <div style={Estilo.input}>
          <InputText
            style={Estilo.inputText}
            placeholder="Contraseña"
            type="password"
          ></InputText>
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
          <Button>Registrarse</Button>
        </Link>
      </div>
    </div>
  );
};
