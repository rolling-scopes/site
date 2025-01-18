'use client';

import classNames from 'classnames/bind';
import YouTube, { YouTubeProps } from 'react-youtube';

import styles from './video-player.module.scss';

type VideoPlayerProps = YouTubeProps;

export const cx = classNames.bind(styles);

export const VideoPlayer = ({ className, ...props }: VideoPlayerProps) => {
  return (
    <div className={cx('video-player-container')}>
      <YouTube className={cx('video-player', className)} {...props} />
    </div>
  );
};
