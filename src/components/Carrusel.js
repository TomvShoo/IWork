import React from 'react';
import { Carousel } from 'primereact/carousel';

const Carrusel = () => {
  const items = [
    {
      content: (
        <img
          alt="Imagen 1"
          src="URL_de_la_Imagen_1"
          style={{ width: '100%' }}
        />
      ),
    },
    // Agrega más elementos según tus necesidades
  ];

  return (
    <div>
      <Carousel value={items} />
    </div>
  );
};

export default Carrusel;
