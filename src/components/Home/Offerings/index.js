import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Yohoo = () => {
  const slides = [
    { color: '#FF6347' },
    { color: '#4682B4' },
    { color: '#32CD32' },
    { color: '#9370DB' },
    { color: '#FFD700' }
  ];

  return (
    <div className="splide-container">
      <Splide
        options={{
          type: 'slide',
          rewind: true,
          width: '100vw', // Set the width to 100vw
          gap: '1rem', // Add some gap between slides
          perPage: 3, // Display 3 slides at a time
          pagination: false,
          breakpoints: {
            768: { // Breakpoint for smaller screens
              perPage: 1, // Display 1 slide at a time for smaller screens
              fixedWidth: 500,
              fixedHeight: 500,
            },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="slide" style={{ backgroundColor: slide.color }}></div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Yohoo;
