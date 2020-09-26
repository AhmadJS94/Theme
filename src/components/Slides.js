import React from 'react';

import { useMediaQuery } from 'react-responsive';

import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

export default function Slides({ data, settings }) {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 360px)' });
  return (
    <div className="mb-4 bg-cadet-blue rounded text-gray-100 p-2">
      <div className=" flex justify-between items-center mb-2 ">
        <h1 className="sub__titles ">Our Products</h1>
        <span>See all</span>
      </div>
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={400}
        totalSlides={data.length}
        visibleSlides={isDesktop ? 5 : isTablet ? 4 : isMobile ? 3 : 1}
        isIntrinsicHeight={true}
        lockOnWindowScroll={true}
        className="relative "
      >
        <Slider className="px-4 overflow-hidden">
          {data.map((photo, i) => {
            return (
              <Slide key={i} innerClassName="px-4 ">
                <div key={photo.url} className="flex-column  cursor-pointer ">
                  <LazyLoad>
                    <div className={`h-${settings.height} relative`}>
                      <Image
                        className="object-cover w-full mb-2 rounded pointer-events-none"
                        src={photo.url}
                        alt="me"
                        hasMasterSpinner
                      />
                      <div className="bg-orange-400 text-blue-100 absolute top-2 right-2 rounded-full p-1 text-xs font-bold uppercase ">
                        <span>50% off</span>
                      </div>
                    </div>
                    <div className="flex-column">
                      <h6 className="text-lg mb-0">{photo.title}</h6>
                      <p className="mb-0 whitespace-no-wrap truncate text-sm">
                        {photo.description}
                      </p>
                      <p className="mb-0">
                        <span className="text-base font-medium">
                          {photo.price}{' '}
                        </span>
                        <span className="text-xs font-light">KD</span>
                      </p>
                    </div>
                  </LazyLoad>
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
      </CarouselProvider>
    </div>
  );
}
