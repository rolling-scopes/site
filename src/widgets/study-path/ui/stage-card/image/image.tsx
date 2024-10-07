import { Image as LazyImage } from '@/shared/ui/image';
import { ImageType } from '@/shared/ui/image/image';

import './image.scss';

interface ImageProps {
  imageSrc: ImageType;
  title: string;
}

export const Image = ({ imageSrc, title }: ImageProps) => {
  return (
    <div className="stage-image">
      <LazyImage img={imageSrc} className="mic-icon" alt={title} />
    </div>
  );
};
