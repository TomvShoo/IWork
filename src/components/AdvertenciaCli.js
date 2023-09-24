import React, { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';

export default function AdvertenciaCli() {
    const toastBottomCenter = useRef(null);

    const showMessage2 = (severity) => {
        const labelcli = "Importante";
        const descripcioncli = "Tu seguridad es importante para nosotros, si descubres algún perfil sospechoso o solicitud de pagos anticipados que son indebidos debes denunciarlos, Juntos podemos mejorar nuestra comunidad I Work";
        toastBottomCenter.current.show({ severity: severity, summary: labelcli, detail: descripcioncli, life: 13000 });
    };

    useEffect(() => {
        showMessage2('info'); 
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toastBottomCenter} position="bottom-center" />
        </div>
    )
}
