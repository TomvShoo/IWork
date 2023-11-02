import React from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// Estilos

const Estilo = {
  caruselImagen: {
    maxWidth: "100%",
    maxHeight: "250px",
    objectFit: "cover",
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
