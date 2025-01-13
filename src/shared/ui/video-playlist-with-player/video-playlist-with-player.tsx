'use client';

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Playlist } from './playlist';
import { Video } from '@/shared/types';
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
  const [playlistHeight, setPlaylistHeight] = useState(675);
  const videoPlayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchYouTubePlaylist = async () => {
      setIsLoading(true);

      try {
        const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          const errorData = await response.json();

          throw new Error(errorData.error.message);
        }

        const data = await response.json();
        const videoItems: Video[] = data.items.map(
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
    return <p>Loading videos...</p>;
  }

  if (error) {
    return <p>{`Error: ${error}`}</p>;
  }

  if (!selectedVideo) {
    return <p>No videos available.</p>;
  }

  return (
    <div className={cx('video-player-container')}>
      <div className={cx('main-video-area')} ref={videoPlayerRef}>
        <VideoPlayer videoId={selectedVideo.id} className={cx('video-player')} />
      </div>
      <Playlist
        title="Video Feedbacks"
        videos={videos}
        onSelectVideo={handleSelectVideo}
        selectedVideoId={selectedVideo.id}
        style={{ maxHeight: playlistHeight }}
      />
    </div>
  );
};
