import { Link, useNavigate  } from "react-router-dom";
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import SwitchButton from "../components/SwitchButton";
import axios from 'axios';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import { Button } from "@mui/material";
// Estilos
import "../style.css";

// const Estilo = {
//   // inputs: {
//   //   margin: "2.5rem 0rem",
//   // },
//   // input: {
//   //   display: "flex",
//   //   flexDirection: "column",
//   // },
//   // h4: {
//   //   margin: "1rem",
//   // },
//   // inputText: {
//   //   margin: "0.25rem 3rem",
//   // },
//   // button: {
//   //   padding: "0.85rem 1.25rem",
//   //   margin: "1.25rem 0rem",
//   // },
//   // registrar: {
//   //   margin: "2rem 0rem",
//   // },
// };

export const Login = () => {
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value  });
  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    // inicio de sesion con axios
    try {
      const response = await axios.post('http://localhost:4000/auth/login', {
        correo: formData.correo,
        contrasena: formData.contrasena,
      });
      
      // manejo de respuesta exitosa
      if(response.data.success) {
        console.log('inicio de sesion exitoso :D');
        console.log('Respuesta del servidor:', response.data);
        localStorage.setItem('token', response.data.data);
        return navigate('/MenuPro')
      } else {
        console.log('Error en el inicio de sesion');
        // return navigate('/MenuPro')
      }
      // const token = response.data.token;
      

    } catch (error) {
      // manejo de errores
      console.error('error en el inicio de sesion', error);
    }
  };

  return (
    <div className="containerLogin">
      <div>
        <h1 className="tittle">I Work</h1>
      </div>

      <div className="switchButton">
        <SwitchButton />
      </div>

      <form onSubmit={ handlesubmit }>
        <div className="input">
          <InputText
            placeholder="Correo electrónico"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}  
          ></InputText>
        </div>
        <div className="input">
          <InputText 
            placeholder="Contraseña" 
            type="password"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleInputChange}
          ></InputText>
        </div>
        <div className="loginContainer">
          <Link to="/MenuPro">
          </Link>
          <Button type="submit" variant="contained" size="large">Iniciar sesión</Button>
        </div>
      </form>


      <div className="registerContainer">
        <p className="registerText">¿No tienes una cuenta?</p>
        <Link to="/Registro">
          <Button size="small">Crear cuenta</Button>
        </Link>
      </div>
    </div>
  );
};
