import React from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
// Estilos
import "../style.css";

const Estilo = {
  caruselImagen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    objectFit: "cover",
  },
};

const ImageCarousel = () => {
  const images = [
    {
      source:
        "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/03125e3dba48c2b4fffa8ea3997759757a91d1d87e57239976ea8aee3cc25563._RI_TTW_.jpg",
      alt: "Imagen 1",
    },
    {
      source:
        "https://img.freepik.com/vector-premium/casa-lago-temporada-verano-hermoso-paisaje-natural_198696-595.jpg",
      alt: "Imagen 2",
    },
  ];

  const itemTemplate = (image) => {
    return (
      <div className="p-grid p-nogutter">
        <div className="p-col">
          <img
            src={image.source}
            alt={image.alt}
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
