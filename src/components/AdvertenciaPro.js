import React, { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';

export default function AdvertenciaPro() {
    const toastBottomCenter = useRef(null);

    const showMessage = (severity) => {
        const label = "Importante";
        const descripcion = "Tu seguridad es importante para nosotros, si descubres algún perfil sospechoso o solicitud extraña puedes denunciarla para revisión, Juntos podemos mejorar nuestra comunidad I Work";
        toastBottomCenter.current.show({ severity: severity, summary: label, detail: descripcion, life: 13000 });
    };

    useEffect(() => {
        showMessage('info'); 
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toastBottomCenter} position="bottom-center" />
        </div>
    )
}
