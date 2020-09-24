import React from 'react';
// import small from '../assets/small.jpg';
// import medium from '../assets/medium.jpg';
// import large from '../assets/2.png';
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
// import { useMediaQuery } from 'react-responsive';
// import { DataProvider } from '../contexts/DataContext';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function MainCarousel({ data }) {
  // const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <div className="relative mb-4 overflow-hidden">
      <CarouselProvider
        naturalSlideWidth={80}
        naturalSlideHeight={80}
        totalSlides={7}
        // isPlaying={true}
        // interval={5000}
        // infinite={true}
        // hasMasterSpinner
        lockOnWindowScroll={true}
        isIntrinsicHeight={true}
      >
        <Slider className="">
          {data.map((photo, i) => (
            <Slide key={i} className="">
              <img
                // hasMasterSpinner
                src={photo.url}
                className="w-full"
                style={{ minHeight: '150px' }}
                alt="something"
              />
            </Slide>
          ))}
          {/* <Slide>
            <img
              style={{ minHeight: '150px' }}
              className="w-full"
              // src={isDesktop ? medium : small}
              // srcSet={`${small} 300w, ${medium} 768w , ${large} 1200w`}
              alt="nothing"
              src={large}
            />
          </Slide> */}
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
