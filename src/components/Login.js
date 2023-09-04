import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import SwitchButton from './SwitchButton'
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
            <a>Correo</a>
            <InputText></InputText>

            <a>Contraseña</a>
            <Password></Password>
        </div>

        <div>
            <Button style={Estilo.button} label='Iniciar Sesion'></Button>
        </div>
        
        <div>
            <a>¿No tienes una cuenta?</a>
            <Button label='Registrate aqui' link/>
        </div>


    </div>
  )
}
