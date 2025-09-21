export const communitySliderOptions = {
  loop: true,
  centeredSlides: true,
  keyboard: { enabled: true },
  slidesPerView: 1.25,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
} as const;

export const mentorshipSliderOptions = {
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
} as const;
