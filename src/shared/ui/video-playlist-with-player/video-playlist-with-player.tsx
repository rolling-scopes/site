'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { Playlist } from './playlist';
import type { Video } from '@/shared/types';
import { VideoPlayer } from '@/shared/ui/video-player';

import styles from './video-playlist-with-player.module.scss';

const cx = classNames.bind(styles);

type VideoPlaylistWithPlayerProps = {
  videoItems: Video[];
};

export const VideoPlaylistWithPlayer = ({ videoItems }: VideoPlaylistWithPlayerProps) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(videoItems[0]);
  const [playlistHeight, setPlaylistHeight] = useState(513);

  const resizedRef = (node: HTMLDivElement | null) => {
    const updatePlaylistHeight = () => {
      if (node) {
        setPlaylistHeight(node.offsetHeight);
      }
    };

    updatePlaylistHeight();

    window.addEventListener('resize', updatePlaylistHeight);

    return () => {
      window.removeEventListener('resize', updatePlaylistHeight);
    };
  };

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  if (!selectedVideo) {
    return <p data-testid="no-videos-message">No videos available.</p>;
  }

  return (
    <div
      className={cx('video-player-container', 'hide-in-percy')}
      data-testid="video-playlist-container"
    >
      <div className={cx('main-video-area')} ref={resizedRef} data-testid="main-video-area">
        <VideoPlayer
          videoId={selectedVideo.id}
          className={cx('video-player')}
          data-testid="video-player"
        />
      </div>
      <Playlist
        title="Video Feedbacks"
        videos={videoItems}
        onSelectVideo={handleSelectVideo}
        selectedVideoId={selectedVideo.id}
        style={{ maxHeight: playlistHeight }}
        data-testid="playlist"
      />
    </div>
  );
};
