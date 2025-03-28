'use client';

import React, { ReactNode } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Pagination } from 'swiper/modules';
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
      modules={[Pagination, A11y]}
      pagination={{ clickable: true }}
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
