'use client'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import React, { useState } from 'react';

export interface SliderProps {
  slides: JSX.Element[];
  autoPlay?: boolean;
  playSpeed?: number;
}

const Slider: React.FC<SliderProps> = ({ slides, autoPlay = false, playSpeed = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = () => {
    const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const indicators = (
    <div className="flex justify-center w-full absolute bottom-4">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`h-2.5 w-2.5 mx-1 rounded-full ${
            index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'
          }`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  );

  // Autoplay
  React.useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (autoPlay) {
      intervalId = setInterval(() => {
        nextSlide();
      }, playSpeed);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoPlay, nextSlide, playSpeed]);

  return (
    <div className="relative w-full">
      {slides.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {item}
        </div>
      ))}
      {indicators}
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2" onClick={prevSlide}>
        <FiChevronLeft className="text-3xl" />
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2" onClick={nextSlide}>
        <FiChevronRight className="text-3xl" />
      </button>
    </div>
  );
};

export default Slider;