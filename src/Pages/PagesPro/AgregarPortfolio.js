import React, { useEffect, useState } from 'react'
import BarraMenuPro from '../../components/BarraMenuPro';
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import { InputTextarea } from 'primereact/inputtextarea';
import "../../style.css";
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const AgregarPortfolio = () => {
  
  const [imagen, setImages] = useState('');
  const [descripcion, setDescription] = useState('');
  const [certificaciones, setCertificates] = useState('');
  const [profesionalId, setProfessionalId] = useState('');

  useEffect(() => {
    // obtener token 
    const token = localStorage.getItem('accessToken');
    if (token) {
        // decodificar token
        const decodedToken = jwt_decode(token);
        // console.log('Decoded Token:', decodedToken);
        setProfessionalId(decodedToken.id);
        // console.log('Professional ID:', decodedToken.id);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const base64Image = event.target.result;
      // setImages((prevImages) => [...prevImages, base64Image]);
      setImages(base64Image);
    };
  
    reader.onerror = (error) => {
        console.error('Error al leer el archivo:', error);
      };

    if (file) {
        reader.readAsDataURL(file);
    }
    console.log(file);
  };

  const handleSave = async () => {
    const requestData  = {
      descripcion,
      certificaciones,
      imagen: imagen.split(',')[1]
    //   profesionalId,
    };
  
    try {
      const response = await axios.post("http://localhost:4000/portafolio/upload", requestData , {
        headers: {
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
      });
  
      if (response.data.success) {
        console.log('Se guardó exitosamente en la base de datos');
        console.log(requestData);
      } else {
        console.error('Hubo un error al guardar el portafolio en la base de datos');
      }
    } catch (error) {
      console.error('Error al comunicarse con el servidor', error);
      console.log(requestData);
    }
  };

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
                                <InputTextarea value={descripcion} onChange={(e) => setDescription(e.target.value)} />
                            </Card>
                            <br></br>
                            <Card title="Certificados">
                                <InputTextarea value={certificaciones} onChange={(e) => setCertificates(e.target.value)} />
                            </Card>
                        </div>
                        <div className='Imagenes'>
                            <Card title="Imagenes">
                                <div className='ImagesContent'>
                                    <Card>
                                        <div className='UploadImage'>
                                            {imagen && (
                                              <div>
                                                <h5>Imágenes seleccionadas:</h5>
                                                <img src={imagen} alt={`Image`} style={{ maxWidth: '200px', maxHeight: '200px', marginRight: '10px' }} />
                                              </div>
                                            )}
                                            <input type="file" accept="image/*" onChange={handleImageUpload} />
                                            <Button label="Subir imagenes" severity="secondary" text type="file" accept="image/*" onChange={handleImageUpload}/>
                                        </div>    
                                    </Card>
                                </div>
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
        