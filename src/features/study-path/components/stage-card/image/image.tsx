import './image.scss';

interface ImageProps {
  imageSrc: string;
  title: string;
}

export const Image = ({ imageSrc, title }: ImageProps) => {
  return (
    <div className="stage-image">
      <img src={imageSrc} alt={title} />
    </div>
  );
};
