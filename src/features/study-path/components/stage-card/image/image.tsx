import LazyImage from '@/shared/ui/image';

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
