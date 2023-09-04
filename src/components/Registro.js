import React from 'react'
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Button } from 'primereact/button';
import { SelectButton } from 'primereact/selectbutton';
        
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css"
        
const Estilo = {
    div: {
        display: "flex",
        flexDirection: "column",
    },
    button: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    tipoCuenta: {
        display: "flex-wrap",
    },
};

export const Registro = () => {
  return (
    <container>
        <Card>
            <div style={Estilo.div}>
                <InputText placeholder='Nombre'></InputText>
                <InputText placeholder='Correo'></InputText>
                <InputText placeholder='Contraseña'></InputText>
                <InputText placeholder='Verificar contraseña'></InputText>

                
            </div>   

            <a>Tipo de cuenta:</a>

            <div style={Estilo.div}>
                <div>
                    <SelectButton />
                    <RadioButton mame="profesional"/>
                    <label>Profesional</label>
                </div>         
                <div>
                    <RadioButton mame="Cliente"/>
                    <label>Cliente</label>
                </div>
            </div>
        </Card>

        <div style={Estilo.button}>
            <Button severity="danger">Cancelar</Button>
            <Button>Aceptar</Button>
        </div>

    </container>
  )
}
