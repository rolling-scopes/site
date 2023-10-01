import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../../assets/photo-1.png';
import photo2 from '../../assets/photo-2.png';
import photo3 from '../../assets/photo-3.png';
import photo4 from '../../assets/photo-4.png';
import photo5 from '../../assets/photo-5.png';
import photo6 from '../../assets/photo-6.png';
import photo7 from '../../assets/photo-7.png';
import photo8 from '../../assets/photo-8.png';
import photo9 from '../../assets/photo-9.png';

import './RSPictures.scss';
import { Title } from '../Title/Title';
import { Paragraph } from '../Paragraph/Paragraph';

const FacebookIcon: React.ReactNode = (
  <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57">
    <path
      d="M 34.834 18.068 L 31.834 18.068 C 30.507 18.068 29.236 18.595 28.298 19.533 C 27.36 20.471 26.834 21.742 26.834 23.068 L 26.834 26.068 L 23.834 26.068 L 23.834 30.068 L 26.834 30.068 L 26.834 38.068 L 30.834 38.068 L 30.834 30.068 L 33.834 30.068 L 34.834 26.068 L 30.834 26.068 L 30.834 23.068 C 30.834 22.803 30.939 22.549 31.126 22.361 C 31.314 22.174 31.568 22.068 31.834 22.068 L 34.834 22.068 Z"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(0,0,0)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray=""></path>
  </svg>
);

const InstagramIcon: React.ReactNode = (
  <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57">
    <path
      d="M 33.166 18.068 L 23.166 18.068 C 20.405 18.068 18.166 20.307 18.166 23.068 L 18.166 33.068 C 18.166 35.83 20.405 38.068 23.166 38.068 L 33.166 38.068 C 35.928 38.068 38.166 35.83 38.166 33.068 L 38.166 23.068 C 38.166 20.307 35.928 18.068 33.166 18.068 Z"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(0,0,0)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray=""></path>
    <path
      d="M 32.167 27.438 C 32.29 28.271 32.148 29.121 31.761 29.867 C 31.373 30.614 30.76 31.22 30.008 31.598 C 29.257 31.976 28.405 32.108 27.575 31.974 C 26.744 31.841 25.977 31.448 25.381 30.854 C 24.787 30.259 24.394 29.491 24.261 28.661 C 24.127 27.83 24.259 26.978 24.637 26.227 C 25.015 25.475 25.621 24.862 26.368 24.475 C 27.114 24.087 27.965 23.945 28.797 24.068 C 29.646 24.194 30.432 24.59 31.038 25.197 C 31.645 25.804 32.041 26.59 32.167 27.438 Z"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(0,0,0)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray=""></path>
    <path
      d="M 33.666 22.568 L 33.676 22.568"
      fill="transparent"
      strokeWidth="2"
      stroke="rgb(0,0,0)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray=""></path>
  </svg>
);

interface SocialMediaProps {
  title: string;
  href: string;
  icon: React.ReactNode;
}
const socialMedia: SocialMediaProps[] = [
  {
    title: 'Albums',
    href: 'https://www.facebook.com/groups/186362068186532/media/albums',
    icon: FacebookIcon
  },
  {
    title: 'The Rolling Scopes',
    href: 'https://www.instagram.com/rollingscopes/',
    icon: InstagramIcon
  },
  {
    title: 'RS School EN',
    href: 'https://www.instagram.com/rsschool_en/',
    icon: InstagramIcon
  },
  {
    title: 'RS School RU',
    href: 'https://www.instagram.com/rsschool_news',
    icon: InstagramIcon
  }
];

export const RSPictures: React.FC = () => (
  <div className="pictures container">
    <div className="pictures content">
      <Title text="The Rolling Scopes in pictures" asterix />
      <Carousel
        className="carousel"
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        centerMode={true}>
        <img src={photo1} />
        <img src={photo2} />
        <img src={photo3} />
        <img src={photo4} />
        <img src={photo5} />
        <img src={photo6} />
        <img src={photo7} />
        <img src={photo8} />
        <img src={photo9} />
      </Carousel>
      <Paragraph>
        Want to see photos of our community? A vast collection of photographs from our events is
        available on our Facebook Albums and Instagram pages.
      </Paragraph>
      <div className="social-media-container">
        {socialMedia.map(({ title, href, icon }) => (
          <a className="social-media" key={title} href={href} target="_blank" rel="noreferrer">
            <div className="icon-container">{icon}</div>
            <div className="text">{title}</div>
          </a>
        ))}
      </div>
    </div>
  </div>
);
