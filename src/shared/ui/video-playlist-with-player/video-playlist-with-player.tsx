'use client';

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import { videoPrivacyStatus } from './constants';
import { Playlist } from './playlist';
import type { Video } from '@/shared/types';
import { VideoPlayer } from '@/shared/ui/video-player';

import styles from './video-playlist-with-player.module.scss';

const cx = classNames.bind(styles);

interface VideoPlaylistWithPlayerProps {
  playlistId: string;
  apiKey: string;
}

export const VideoPlaylistWithPlayer = ({ playlistId, apiKey }: VideoPlaylistWithPlayerProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [playlistHeight, setPlaylistHeight] = useState(513);
  const videoPlayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchYouTubePlaylist = async () => {
      setIsLoading(true);

      try {
        const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          const errorData = await response.json();

          throw new Error(errorData.error.message);
        }

        const data = await response.json();
        const publicVideos = data.items.filter(
          (item: GoogleApiYouTubePlaylistItemResource) =>
            item.status.privacyStatus === videoPrivacyStatus.public,
        );

        const videoItems: Video[] = publicVideos.map(
          (item: GoogleApiYouTubePlaylistItemResource) => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url,
          }),
        );

        setVideos(videoItems);

        if (videoItems.length > 0) {
          setSelectedVideo(videoItems[0]);
        }
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchYouTubePlaylist();
  }, [playlistId, apiKey]);

  useEffect(() => {
    const updatePlaylistHeight = () => {
      if (videoPlayerRef.current) {
        setPlaylistHeight(videoPlayerRef.current.offsetHeight);
      }
    };

    updatePlaylistHeight();

    window.addEventListener('resize', updatePlaylistHeight);

    return () => {
      window.removeEventListener('resize', updatePlaylistHeight);
    };
  }, []);

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  if (isLoading) {
    return <p data-testid="loading-message">Loading videos...</p>;
  }

  if (error) {
    return <p data-testid="error-message">{`Error: ${error}`}</p>;
  }

  if (!selectedVideo) {
    return <p data-testid="no-videos-message">No videos available.</p>;
  }

  return (
    <div className={cx('video-player-container', 'hide-in-percy')} data-testid="video-playlist-container">
      <div className={cx('main-video-area')} ref={videoPlayerRef} data-testid="main-video-area">
        <VideoPlayer videoId={selectedVideo.id} className={cx('video-player')} data-testid="video-player" />
      </div>
      <Playlist
        title="Video Feedbacks"
        videos={videos}
        onSelectVideo={handleSelectVideo}
        selectedVideoId={selectedVideo.id}
        style={{ maxHeight: playlistHeight }}
        data-testid="playlist"
      />
    </div>
  );
};
