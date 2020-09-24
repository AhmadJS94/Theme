import React from 'react';

import { useMediaQuery } from 'react-responsive';

import {
  CarouselProvider,
  Slider,
  Slide,
  // DotGroup,
  // Image,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function CategorySlider({ data }) {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 360px)' });
  return (
    <div className=" overflow-hidden mb-4 bg-pink-400 rounded text-gray-100 p-2">
      <div className=" flex justify-between items-center mb-1 ">
        <h1 className="sub__titles ">Categories</h1>
        <span>See all</span>
      </div>

      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={400}
        totalSlides={data.length}
        visibleSlides={isDesktop ? 7 : isTablet ? 5 : isMobile ? 3 : 1}
        isIntrinsicHeight={true}
        // hasMasterSpinner={true}
        lockOnWindowScroll={true}
        className="relative "
      >
        <Slider className="">
          {data.map((photo, i) => {
            return (
              <Slide key={i} innerClassName="px-0 " className="relative">
                {i !== 0 && (
                  <span className="absolute top-10 w-2p h-16 bg-gray-200 rounded" />
                )}
                <div key={photo.url} className=" cursor-pointer">
                  <div className="grid place-items-center p-1">
                    <img
                      className="object-cover rounded-full pointer-events-none w-20 h-20 border-white border"
                      // style={{ width: '90px', height: '90px' }}
                      src={photo.url}
                      alt="me"
                      // hasMasterSpinner
                    />
                  </div>

                  <h6 className="category__titles truncate">{photo.title}</h6>
                </div>
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack className="category-arrow-left left-1">
          <FaChevronLeft className="opacity-50" />
        </ButtonBack>
        <ButtonNext className="category-arrow-right">
          <FaChevronRight className="opacity-50" />
        </ButtonNext>

        {/* <DotGroup /> */}
      </CarouselProvider>
    </div>
  );
}
