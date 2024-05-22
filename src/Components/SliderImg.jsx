import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

// Array of image URLs
const images = [
  "https://www.nifafinearts.com/banner-images/68443482910725840423.jpg",
  "https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg",
  "https://www.nifafinearts.com/banner-images/112450848836242444221.jpg",
  "https://www.nifafinearts.com/banner-images/1199524091522728998b1.png",
  "https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg",
];

const SliderImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full ">
      <div className="w-full ">
        <img
          src={images[currentIndex]}
          alt="Slider"
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white py-2"
      >
        <MdKeyboardArrowLeft size={50} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white py-2 "
      >
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
};

export default SliderImg;
