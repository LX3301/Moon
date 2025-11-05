import React from "react";
import { useState } from "react";
 
import arrLeft from "../../assets/images/arrow_left.png"
import arrRight from "../../assets/images/arrow_right.png"

const Carousel = ({ images, altText, customClass }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className={`h-carousel ${customClass}`}>
      <div className="h-carousel-image">
        <img src={images[currentIndex]} alt={altText[currentIndex]} />
      </div>
      <button className="h-carousel-btn-prev" onClick={prevImage}>
        <img src={arrLeft} alt="Previous" />
      </button>
      <button className="h-carousel-btn-next" onClick={nextImage}>
      <img src={arrRight} alt="Previous" />
      </button>
    </div>
  );
};
export default Carousel;
