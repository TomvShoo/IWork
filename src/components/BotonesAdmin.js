import React from 'react'; 
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "../style.css";

export default function BotonAdmin() {
    return (
        <div className="card flex flex-column md:flex-row gap-3">
            <div className="p-inputgroup flex-1">
                <Button label="Usuario" />
                <InputText placeholder="Ingresar nombre de usuario" />
            </div>
            <div className="p-inputgroup flex-1">
                <Button icon="pi pi-check" className="p-button-success" />
                <Button icon="pi pi-times" className="p-button-danger" />
            </div>
        </div>
    )
}