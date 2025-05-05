import type { Video } from '@/shared/types';

export function transformMentorsVideos(videos: GoogleApiYouTubePlaylistItemResource[]): Video[] {
  return videos.map((item) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
  }));
}
