import { StaticImageData } from 'next/image';
import { Image as LazyImage } from '@/shared/ui/image';

import './image.scss';

interface ImageProps {
  imageSrc: StaticImageData;
  title: string;
}

export const Image = ({ imageSrc, title }: ImageProps) => {
  return (
    <div className="stage-image">
      <LazyImage img={imageSrc} className="mic-icon" alt={title} />
    </div>
  );
};
