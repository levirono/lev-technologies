import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState([
    {
      image: 'image1.png',
      title: 'Item 1',
      description: 'Description for Item 1.',
    },
    {
      image: 'image2.png',
      title: 'Item 2',
      description: 'Description for Item 2.',
    },
    {
      image: 'image3.png',
      title: 'Item 3',
      description: 'Description for Item 3.',
    },
    {
      image: 'image4.png',
      title: 'Item 4',
      description: 'Descr fighrfohe rigeif  tgiuekr 4trt8iqv3 r38ttrv 83trik<br> r3 rt3iteqtr tr38t ietrtg itgfeg oehf erhr oef3o9r hrhrh oroh 4orh oheorh3oh iption for Item 4.',
    },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex, sliderData.length]);

  return (
    <div className="relative text-center">
      <img
        src={sliderData[currentIndex].image}
        alt={sliderData[currentIndex].title}
        className="mx-auto rounded-lg shadow-lg mb-4 relative"
        style={{ width: '50%', height: '50%', transition: 'transform 0.5s ease-in-out' }}
      />
      <div className="absolute bottom-0 left-0 w-full p-4 text-white">
        <h2 className="text-3xl font-bold mb-2 text-yellow-400 shadow-lg">{sliderData[currentIndex].title}</h2>
        <p className="text-gray-300 shadow-lg">{sliderData[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
