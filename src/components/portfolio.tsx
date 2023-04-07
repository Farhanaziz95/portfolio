import Slider, { SliderProps } from './sliderComponent/ownSlider';

import React from 'react';

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  const slides = [
    <div key={1}>Slide 1</div>,
    <div key={2}>Slide 2</div>,
    <div key={3}>Slide 3</div>,
  ];

  const sliderProps: SliderProps = { slides };

  return (
    <div>
      <Slider autoPlay={true} playSpeed={3000} {...sliderProps} />
    </div>
  );
};

export default Portfolio;