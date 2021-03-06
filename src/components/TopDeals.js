import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import { useMediaQuery } from 'react-responsive';
export default function TopDeals({ data }) {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(min-width: 360px)' });
  return (
    <div className="mb-4 p-2 rounded   ">
      <div className=" flex  justify-between items-center mb-2 ">
        <h1 className="sub__titles ">Top Online Deals</h1>
        <span>See all</span>
      </div>
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={400}
        totalSlides={data.length}
        visibleSlides={isDesktop ? 4 : isTablet ? 4 : isMobile ? 1 : 1}
        isIntrinsicHeight={true}
        lockOnWindowScroll={true}
        className="relative "
      >
        <Slider className="px-0 overflow-hidden">
          {data.map((photo, i) => {
            return (
              <Slide key={i}>
                <div
                  key={photo.url}
                  className="flex-column mx-1 cursor-pointer "
                >
                  <div className={`grid place-items-center`}>
                    <img
                      className="object-cover w-full mb-2 rounded pointer-events-none"
                      src={photo.url}
                      alt="me"
                    />
                  </div>
                </div>
              </Slide>
            );
          })}
        </Slider>
      </CarouselProvider>
    </div>
  );
}
