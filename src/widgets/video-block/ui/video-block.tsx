import classNames from 'classnames/bind';

import styles from './video-block.module.scss';

const cx = classNames.bind(styles);

type VideoBlockProps = {
  url: string;
};

export const VideoBlock = ({ url }: VideoBlockProps) => {
  return (
    <div className={cx('video-wrapper')}>
      <div className={cx('video-container', 'hide-in-percy')}>
        <iframe
          className={cx('video-frame')}
          loading="lazy"
          src={url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};
