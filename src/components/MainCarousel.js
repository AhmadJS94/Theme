import React from 'react';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  // Dot,
  // Image,
  // ImageWithZoom,
} from 'pure-react-carousel';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function MainCarousel({ data }) {
  return (
    <div className="relative mb-4 overflow-hidden">
      <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={80}
        totalSlides={7}
        lockOnWindowScroll={true}
        isIntrinsicHeight={true}
      >
        <Slider className="">
          {data.map((photo, i) => (
            <Slide key={i} className="">
              <img
                src={photo.url}
                className="w-full"
                style={{ minHeight: '150px' }}
                alt="something"
              />
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="carousel-arrow-left">
          <FaChevronLeft className="opacity-50" />
        </ButtonBack>
        <ButtonNext className="carousel-arrow-right">
          <FaChevronRight className="opacity-50" />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}
