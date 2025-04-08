import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0001.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0003.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0004.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0005.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0006.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0007.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0008.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0009.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0010.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0011.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0012.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0013.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0014.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0015.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0016.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0016.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0017.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0019.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0020.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0021.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0022.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0023.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0024.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0025.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0026.jpg",
    "/images/Aadivasi Vikas Vibhag Yojna Diary_page-0028.jpg",
  ];

  const imagesPerSlide = 3; // Number of images visible at a time
  const totalSlides = Math.ceil(images.length / imagesPerSlide);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-500"
        style={{
          width: `${totalSlides * 100}%`,
          transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-1/3 p-2">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8594;
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
