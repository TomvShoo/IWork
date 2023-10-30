import React from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// Estilos

const Estilo = {
  caruselImagen: {
    maxWidth: "100%", // Asegura que la imagen no sea más ancha que su contenedor
    maxHeight: "300px", // Limita la altura máxima de la imagen
    objectFit: "cover", // Ajusta el tamaño de la imagen para que cubra completamente su contenedor manteniendo la relación de aspecto
  },
};

const ImageCarousel = ({ images }) => {
  const itemTemplate = (image) => {
    return (
      <div className="p-grid p-nogutter">
        <div className="p-col">
          <img
            src={`data:image/jpeg;base64, ${image}`} // Utiliza directamente la imagen
            alt="Imagen"
            style={Estilo.caruselImagen}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="carousel-demo">
      <Carousel
        value={images}
        itemTemplate={itemTemplate}
        numVisible={1}
        numScroll={1}
        circular={true}
      />
    </div>
  );
};

export default ImageCarousel;
