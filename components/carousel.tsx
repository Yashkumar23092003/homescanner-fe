"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const imagePaths = [
  '/app_ui/Group 144.png',
  '/app_ui/Group 145.png',
  '/app_ui/Group 146.png',
  '/app_ui/Group 147.png',
  '/app_ui/Group 148.png',
  '/app_ui/Group 149.png',
  '/app_ui/Group 150.png'
  
];

const ImageCarousel: React.FC = () => {
  const images: string[] = imagePaths;
  const duplicatedImages: string[] = [...images, ...images];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 640 ? 1 : 3);
    }; 

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    if (currentIndex >= images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
    }
  }, [currentIndex, images.length]);

  return (
<div className='flex-col justify-center items-center'>
{/* <h1>Launching in Playstore soon…. Join for early access…</h1> */}

<div className="w-full sm:w-[50vw] mx-auto mt-0 mb-16 flex justify-center items-center overflow-hidden relative">
      <div
        ref={slideRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
          transitionProperty: isTransitioning ? 'transform' : 'none',
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="px-4 min-w-full sm:min-w-[33.333%] flex justify-center"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={100}
              height={500}
              className="w-[500px] h-[500px] "
            />
          </div>
        ))}
      </div>
    </div>
</div>
   
  );
};

export default ImageCarousel;
