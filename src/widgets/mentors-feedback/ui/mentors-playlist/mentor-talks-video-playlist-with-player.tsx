'use client';

import useSWR from 'swr';

import { mentorStore, transformMentorsVideos } from '@/entities/mentor';
import { SWR_CACHE_KEY } from '@/shared/constants';
import { filterYoutubePrivateVideos } from '@/shared/helpers/filter-youtube-private-videos';
import { VideoPlaylistWithPlayer } from '@/shared/ui/video-playlist-with-player';

export const MentorTalksVideoPlaylistWithPlayer = () => {
  const {
    data: { items: videosData } = { items: [] },
    isLoading,
    error,
  } = useSWR(SWR_CACHE_KEY.MENTORS_PLAYLIST, mentorStore.loadYoutubePlaylist);

  const publicVideos = filterYoutubePrivateVideos(videosData);
  const videoItems = transformMentorsVideos(publicVideos);

  if (isLoading) {
    return <p data-testid="loading-message">Loading videos...</p>;
  }

  if (error) {
    return <p data-testid="error-message">{error.message}</p>;
  }

  return <VideoPlaylistWithPlayer videoItems={videoItems} />;
};
