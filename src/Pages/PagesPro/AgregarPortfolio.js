import React, { useEffect, useState } from 'react'
import BarraMenuPro from '../../components/BarraMenuPro';
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { InputTextarea } from 'primereact/inputtextarea';
import "../../style.css";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const AgregarPortfolio = () => {
  
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');
  const [certificates, setCertificates] = useState('');
  const [professionalId, setProfessionalId] = useState('');

  useEffect(() => {
    // obtener token 
    const token = localStorage.getItem('accessToken');
    if (token) {
        // decodificar token
        const decodedToken = jwt_decode(token);
        setProfessionalId(decodedToken.usuarioId);
        // const professionalId = decodedToken.usuarioId;
        // setProfessionalId(decodedToken.profesionalId);
    }
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result]);
    };

    if (file) {
        reader.readAsDataURL(file);
    }

    // if (images.length < 3) {
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onload = (event) => {
    //       const base64Image = event.target.result;
    //       setImages([...images, base64Image]);
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // }

    // if (file) {
    //     reader.readAsDataURL(file);
    //     reader.onload = () => {
    //       const base64Image = reader.result;
    //       setImages([...images, base64Image]);
    //     };
    // }
  };

  const handleSave = async () => {

    const formData = new FormData();
    formData.append('description', description);
    formData.append('certificates', certificates);
    formData.append('professionalId', professionalId);
    images.forEach((image, index) => {
        formData.append(`image${index}`, image);
    });
    
    try {
        const response = await axios.post('http://localhost:4000/portafolio/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

        if (response.data.succes) {
            console.log('se guardo exitosamente en la base de datos');
            console.log(formData);
        } else {
            console.error('Hubo un error al guardar el portafolio en la base de datos');
            // Realiza cualquier lógica adicional aquí, como mostrar un mensaje de error al usuario.
        }
    } catch (error) {
        console.error('Error al comunicarse con el servidor', error);
        console.log(formData);
    }

  }

  const footer = (
      <div className="footer">
          <Button label="Guardar" icon="pi pi-check" onClick={handleSave}/>
          <Button label="Cancelar" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
      </div>
  );
  
  return (
    <div className=''>
        <BarraMenuPro />
        <div>
            <div className='titulo'>
                <h4>Agregar Portafolio</h4>
            </div>
            <div className='Carta'>
                <Card footer={footer}>
                    <div className='Descripcion'>
                         <div className='infoPro'>
                            <Card title="Descripcion">
                                <InputTextarea value={description} onChange={(e) => setDescription(e.target.value)} />
                            </Card>
                            <br></br>
                            <Card title="Certificados">
                                <InputTextarea value={certificates} onChange={(e) => setCertificates(e.target.value)} />
                            </Card>
                        </div>
                        <div className='Imagenes'>
                            <Card title="Imagenes">
                                <Card>
                                    <div className='UploadImage'>
                                        {images.length > 0 && (
                                    <div>
                                    <h5>Imágenes seleccionadas:</h5>
                                    {images.map((image, index) => (
                                        <img key={index} src={image} alt={`Image ${index}`} style={{ maxWidth: '200px', maxHeight: '200px', marginRight: '10px' }} />
                                    ))}
                                    </div>
                                    )}
                                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                                    <Button label="Subir imagenes" severity="secondary" text type="file" accept="image/*" onChange={handleImageUpload}/>
                                </div>    
                                </Card>
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default AgregarPortfolio
        