import LazyImage from '@/shared/image';

import './image.scss';

interface ImageProps {
  imageSrc: string;
  title: string;
}

export const Image = ({ imageSrc, title }: ImageProps) => {
  return (
    <div className="stage-image">
      <LazyImage src={imageSrc} className="mic-icon" alt={title} />
    </div>
  );
};
