'use client';

import React, { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperProps, SwiperSlide, SwiperSlideProps } from 'swiper/react';

type SliderProps = {
  slides: ReactNode[];
  sliderProps?: SwiperProps;
  slidesProps?: SwiperSlideProps;
  className?: string;
};

export const Slider = ({ slides, sliderProps, slidesProps, className }: SliderProps) => {
  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay, Keyboard, Navigation]}
      pagination={{ clickable: true }}
      a11y={{ enabled: true }}
      {...sliderProps}
      className={className}
    >
      {slides.map((slide: ReactNode, index: number) => (
        <SwiperSlide {...slidesProps} key={index}>
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
