'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IMAGE_DATA } from './CarouselData';

interface SliderProps {
  slides: {
    image: string;
  }[];
}

export default function ChatHeader({ slides }: SliderProps) {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="gallery" className="w-full mx-auto rounded-lg">
      <div className="relative">
        {IMAGE_DATA.map((slides, index) => {
          const secondImage = IMAGE_DATA[index + 1];
          const thirdImage = IMAGE_DATA[index + 2];
          const fourthImage = IMAGE_DATA[index + 3];
          const image2 = !secondImage ? '' : secondImage.image;
          const image3 = !thirdImage ? '' : thirdImage.image;
          const image4 = !fourthImage ? '' : fourthImage.image;
          return (
            <div
              key={index}
              className={
                index === current
                  ? 'opacity-[1] ease-in duration-100'
                  : 'opacity-0'
              }
            >
              <IoIosArrowBack
                onClick={() => {
                  if (slides.image !== IMAGE_DATA[0].image) {
                    prevSlide();
                  }
                }}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <div className="flex gap-x-5 overflow-x-auto">
                  <Image
                    src={slides.image}
                    alt="/"
                    width="400"
                    height="500"
                    className="max-h-[400px] min-h-[400px]"
                    style={{ objectFit: 'cover' }}
                  />
                  <Image
                    src={image2}
                    alt="/"
                    width="400"
                    height="500"
                    className="max-h-[400px] min-h-[400px]"
                    style={{ objectFit: 'cover' }}
                  />
                  <Image
                    src={image3}
                    alt="/"
                    width="400"
                    height="500"
                    className="max-h-[400px] min-h-[400px]"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}

              <IoIosArrowForward
                onClick={() => {
                  if (image3 !== '' && image4 !== '') {
                    nextSlide();
                  }
                }}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
