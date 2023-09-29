import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
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

  const [formData, setformData] = useState({
    nombre: '',
    apellido: '',
    nroTelefono: '',
    correo: '',
    contrasena: '',
    confirmarContrasena: '',
    tipoCuenta: '',
  })

  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // verificar la contraseña y la confirmacion de la contraseña
    if(formData.contrasena !== formData.confirmarContrasena) {
      console.log('las contraseñas no coinciden');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/auth/register', {
        nombre: formData.nombre,
        apellido: formData.apellido,
        nroTelefono: formData.nroTelefono,
        correo: formData.correo,
        contrasena: formData.contrasena,
        tipoCuenta: formData.tipoCuenta,
      });

      if(response.data.success) {
        console.log('Registro exitoso :D');
        navigate('/');
      } else {
        console.log('Registro fallido');
      }
        
    } catch (error) {
      if(error.response && error.response.status === 400) {
        console.log('Solicitud incorrecta: Verifica los datos ingresados');
        console.log('error en el registro', error);
      } else {
        console.log('error en el registro', error);
      }
    }

  };

  return (
    <form 
      style={Estilo.divContainer} 
      onSubmit={handleSubmit}
    >
      <div style={Estilo.inputs}>
        <InputText 
          placeholder="Nombre" 
          style={Estilo.input}
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
        ></InputText>
        <InputText 
          placeholder="Apellido" 
          style={Estilo.input}
          name="apellido"
          value={formData.apellido}
          onChange={handleInputChange}
        ></InputText>
        <InputText 
          placeholder="Numero de Telefono" 
          style={Estilo.input}
          name="nroTelefono"
          value={formData.nroTelefono}
          onChange={handleInputChange}
        ></InputText>
        <InputText 
          placeholder="Correo" 
          style={Estilo.input}
          name="correo"
          value={formData.correo}
          onChange={handleInputChange}
        ></InputText>
        <InputText 
          placeholder="Contraseña" 
          style={Estilo.input}
          name="contrasena"
          value={formData.contrasena}
          onChange={handleInputChange}
        ></InputText>
        <InputText
          placeholder="Verificar contraseña"
          style={Estilo.input}
          name="confirmarContrasena"
          value={formData.confirmarContrasena}
          onChange={handleInputChange}
        ></InputText>
      </div>
      <div style={Estilo.cuentas}>
        <p>Tipo de cuenta:</p>
        <SelectButton
            options={[
              { label: "Cliente", value: "cliente" },
              { label: "Profesional", value: "profesional" },
            ]}
            value={formData.tipoCuenta}
            onChange={(e) => setformData({ ...formData, tipoCuenta: e.value })}
          />
      </div>

      <div style={Estilo.button}>
        <Link to="/">
          <Button severity="danger">Cancelar</Button>
        </Link>
        
        <Button type="sumbit">Registrarse</Button>        
      </div>
    </form>
  );
};
