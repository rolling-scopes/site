import { MentorPlaylistResponse } from '@/entities/mentor/types';
import { videoPrivacyStatus } from '@/shared/ui/video-playlist-with-player/constants';

export function filterYoutubePrivateVideos(videos: MentorPlaylistResponse) {
  return videos.items.filter((item) => item.status.privacyStatus === videoPrivacyStatus.public);
}
