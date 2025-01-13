import React, { CSSProperties } from 'react';
import classNames from 'classnames/bind';
import { Video } from '@/shared/types';

import styles from './playlist.module.scss';

const cx = classNames.bind(styles);

type PlaylistProps = {
  title: string;
  videos: Video[];
  onSelectVideo: (video: Video) => void;
  selectedVideoId?: string;
  style: CSSProperties;
};

export const Playlist = ({ title, videos, onSelectVideo, selectedVideoId, style }: PlaylistProps) => {
  const isSelected = (videoId: string) => videoId === selectedVideoId;

  return (
    <div className={cx('playlist')} style={style}>
      <h3 className={cx('playlist-title')}>{`${videos.length} ${title}`}</h3>
      <div className={cx('videos-container')}>
        {videos.map((video) => (
          <div
            key={video.id}
            className={cx('playlist-item', { selected: isSelected(video.id) })}
            onClick={() => onSelectVideo(video)}
          >
            <div className={cx('playlist-item-thumbnail-container')}>
              <img src={video.thumbnail} alt={video.title} />
              {isSelected(video.id) && <div className={cx('now-playing-overlay')}>Now playing</div>}
            </div>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
