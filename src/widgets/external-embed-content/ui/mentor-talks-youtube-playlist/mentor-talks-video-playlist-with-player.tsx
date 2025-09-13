'use client';

import useSWR from 'swr';

import { mentorStore } from '@/entities/mentor';
import { SWR_CACHE_KEY } from '@/shared/constants';
import { VideoPlaylistWithPlayer } from '@/shared/ui/video-playlist-with-player';

export const MentorTalksVideoPlaylistWithPlayer = () => {
  const {
    data: videoItems,
    isLoading,
    error,
  } = useSWR(SWR_CACHE_KEY.MENTORS_PLAYLIST, mentorStore.loadYoutubePlaylist, { fallbackData: [] });

  if (isLoading) {
    return <p data-testid="loading-message">Loading videos...</p>;
  }

  if (error) {
    return <p data-testid="error-message">{error.message}</p>;
  }

  return <VideoPlaylistWithPlayer videoItems={videoItems} />;
};
