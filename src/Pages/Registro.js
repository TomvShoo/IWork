import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";

const Estilo = {
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "3rem 0rem",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    margin: "1rem 2rem",
  },
  cuentas: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
  },
  cuenta: {
    margin: "1rem 0rem",
  },
  button: {
    display: "flex",
    alignItems: "center",
    margin: "2rem 0rem",
    justifyContent: "space-evenly",
  },
};

export const Registro = () => {
  return (
    <container style={Estilo.container}>
      <div style={Estilo.inputs}>
        <InputText placeholder="Nombre" style={Estilo.input}></InputText>
        <InputText placeholder="Correo" style={Estilo.input}></InputText>
        <InputText placeholder="Contraseña" style={Estilo.input}></InputText>
        <InputText
          placeholder="Verificar contraseña"
          style={Estilo.input}
        ></InputText>
      </div>

      <div style={Estilo.cuentas}>
        <p>Tipo de cuenta:</p>
        <div style={Estilo.cuenta}>
          <SelectButton />
          <RadioButton mame="profesional" />
          <label>Profesional</label>
        </div>
        <div style={Estilo.cuenta}>
          <RadioButton mame="Cliente" />
          <label>Cliente</label>
        </div>
      </div>

      <div style={Estilo.button}>
        <Link to="/Login">
          <Button severity="danger">Cancelar</Button>
        </Link>
        <Link to="/Login">
          <Button>Aceptar</Button>
        </Link>
      </div>
    </container>
  );
};
