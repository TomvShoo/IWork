import React from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const ImageCarousel = () => {
  const images = [
    { source: "imagen1.jpg", alt: "Imagen 1" },
    { source: "imagen2.jpg", alt: "Imagen 2" },
    { source: "imagen3.jpg", alt: "Imagen 3" },
    { source: "imagen4.jpg", alt: "Imagen 4" },
  ];

  const itemTemplate = (image) => {
    return (
      <div className="p-grid p-nogutter">
        <div className="p-col">
          <img src={image.source} alt={image.alt} />
        </div>
      </div>
    );
  };

  return (
    <div className="carousel-demo">
      <h2>Muro</h2>
      <Carousel
        value={images}
        itemTemplate={itemTemplate}
        numVisible={3}
        numScroll={1}
        responsiveOptions={[
          {
            breakpoint: "1024px",
            numVisible: 2,
            numScroll: 1,
          },
          {
            breakpoint: "768px",
            numVisible: 1,
            numScroll: 1,
          },
        ]}
      />
    </div>
  );
};

export default ImageCarousel;
