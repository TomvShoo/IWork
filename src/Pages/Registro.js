import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { ToggleButton } from 'primereact/togglebutton';
import Modal from 'react-bootstrap/Modal';


const Estilo = {
  divContainer: {
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [checked, setChecked] = useState(false);


  return (
    <div style={Estilo.divContainer}>
      <div style={Estilo.inputs}>
        <InputText placeholder="Nombre" style={Estilo.input}></InputText>
        <InputText placeholder="Apellido" style={Estilo.input}></InputText>
        <InputText placeholder="Numero Telefonico (569)" style={Estilo.input}></InputText>
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
          <RadioButton name="profesional" />
          <label>Profesional</label>
        </div>
        <div style={Estilo.cuenta}>
          <RadioButton name="Cliente" />
          <label>Cliente</label>
        </div>
        <div>
          <div>
            <Button label="Terminos y condiciones:" onClick={handleShow} link />
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Terminos y condiciones</Modal.Title>
            </Modal.Header>
            <Modal.Body>Aqui van los terminos y condiciones</Modal.Body>
          </Modal>
          <div style={Estilo.cuenta}>
            <div>
              <ToggleButton onLabel="Acepto los terminos y condiciones" offLabel="Rechazo los terminos y condiciones" onIcon="pi pi-check" offIcon="pi pi-times"
                checked={checked} onChange={(e) => setChecked(e.value)} className="w-9rem" />
            </div>
          </div>
        </div>
      </div>

      <div style={Estilo.button}>
        <Link to="/">
          <Button severity="danger">Cancelar</Button>
        </Link>
        <Link to="/">
          <Button>Aceptar</Button>
        </Link>
      </div>
    </div>
  );
};
