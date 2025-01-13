'use client';

import classNames from 'classnames/bind';
import YouTube, { YouTubeProps } from 'react-youtube';

import styles from './video-player.module.scss';

type VideoPlayerProps = YouTubeProps;

export const cx = classNames.bind(styles);

export const VideoPlayer = (props: VideoPlayerProps) => {
  return <YouTube {...props} />;
};
