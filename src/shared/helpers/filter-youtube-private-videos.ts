import { videoPrivacyStatus } from '@/shared/ui/video-playlist-with-player/constants';

export function filterYoutubePrivateVideos(videos: GoogleApiYouTubePlaylistItemResource[]) {
  return videos.filter((item) => item.status.privacyStatus === videoPrivacyStatus.public);
}
