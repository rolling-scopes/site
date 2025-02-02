import classNames from 'classnames/bind';
import NextImage, { StaticImageData } from 'next/image';

import styles from './image.module.scss';

const cx = classNames.bind(styles);

type ImageProps = {
  imageSrc: StaticImageData;
  title: string;
};

export const Image = ({ imageSrc, title }: ImageProps) => {
  return (
    <div className={cx('stage-image-wrapper')}>
      <NextImage src={imageSrc} className={cx('stage-image')} alt={title} />
    </div>
  );
};
