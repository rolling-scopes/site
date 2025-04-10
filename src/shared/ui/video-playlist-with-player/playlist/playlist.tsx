import React, { CSSProperties } from 'react';
import classNames from 'classnames/bind';

import { Subtitle } from '../../subtitle';
import type { Video } from '@/shared/types';

import styles from './playlist.module.scss';

const cx = classNames.bind(styles);

type PlaylistProps = {
  title: string;
  videos: Video[];
  onSelectVideo?: (video: Video) => void;
  selectedVideoId?: string;
  style?: CSSProperties;
};

export const Playlist = ({
  title,
  videos,
  onSelectVideo,
  selectedVideoId,
  style,
}: PlaylistProps) => {
  const isSelected = (videoId: string) => videoId === selectedVideoId;

  return (
    <div className={cx('playlist')} style={style} data-testid="playlist">
      <Subtitle
        fontSize="small"
        fontWeight="bold"
        className={cx('playlist-title')}
        data-testid="playlist-title"
      >
        {`${videos.length} ${title}`}
      </Subtitle>
      <div className={cx('videos-container')} data-testid="videos-container">
        {videos.map((video) => (
          <div
            key={video.id}
            className={cx('playlist-item', { selected: isSelected(video.id) })}
            onClick={() => onSelectVideo?.(video)}
            data-testid={`playlist-item-${video.id}`}
          >
            <div
              className={cx('playlist-item-thumbnail-container')}
              data-testid={`thumbnail-container-${video.id}`}
            >
              <img src={video.thumbnail} alt={video.title} data-testid={`thumbnail-${video.id}`} />
              {isSelected(video.id) && (
                <div
                  className={cx('now-playing-overlay')}
                  data-testid={`now-playing-overlay-${video.id}`}
                >
                  Now playing
                </div>
              )}
            </div>
            <p data-testid={`video-title-${video.id}`}>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
