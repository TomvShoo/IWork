import React from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "../style.css";

const Estilo = {
  caruselImagen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "500px",
    objectFit: "cover",
  }
}

const ImageCarousel = () => {
  const images = [
    { source: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037", alt: "Imagen 1" },
    { source: "https://img.freepik.com/vector-premium/casa-lago-temporada-verano-hermoso-paisaje-natural_198696-595.jpg", alt: "Imagen 2" },
  ];

  const itemTemplate = (image) => {
    return (
      <div className="p-grid p-nogutter">
        <div className="p-col">
          <img 
            src={image.source} 
            alt={image.alt}
            style={Estilo.caruselImagen} />
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
        