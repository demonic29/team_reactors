import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Carousel.css';
import Button from '../buttons/Button'
import { NavLink } from 'react-router-dom';

import { useApi } from '../../contexts/managerPage/api-context';
const CarouselImages = ({ slides }) => {
  const [imgHover, setImgHover] = useState(false);

  const {data} = useApi();

  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      speed={600}
      rewind={true}
      parallax={true}
      modules={[Navigation, Pagination, Parallax, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-[700px]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          className={`relative left-0 top-0 h-[700px] bg-cover bg-center fade-in duration-100 transition-all`}
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
          style={{
            backgroundImage: `url(${slide.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          data-swiper-parallax="-23%"
        >
          {imgHover && (
            <div className="absolute flex items-center bg-black bg-opacity-50 z-50 h-full w-full fade-in">
              <div className="px-[50px] grid gap-4 ms-5">
                <div className="text-3xl text-white font-bold" data-swiper-parallax="-300">
                  {slide.title}
                </div>
                <div className="text-md text-white" data-swiper-parallax="-200">
                  {slide.desc}
                </div>

                <NavLink to={"/tour"}>
                  <Button>Go Tour</Button>
                </NavLink>
              </div>
            </div>
          )}

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselImages;
