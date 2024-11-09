import NextImage, { StaticImageData } from 'next/image';

import './image.scss';

interface ImageProps {
  imageSrc: StaticImageData;
  title: string;
}

export const Image = ({ imageSrc, title }: ImageProps) => {
  return (
    <div className="stage-image">
      <NextImage src={imageSrc} className="mic-icon" alt={title} />
    </div>
  );
};
