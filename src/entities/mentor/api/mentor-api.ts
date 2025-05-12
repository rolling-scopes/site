import { MENTORSHIP_YOUTUBE_PLAYLIST_ID } from '../constants';
import { MentorPlaylistResponse } from '../types';
import { YOUTUBE_API_MAX_RESULTS_PER_PAGE } from '@/shared/constants';
import { ApiServices } from '@/shared/types/';

export class MentorApi {
  constructor(private readonly services: ApiServices) {}

  public queryMentorPlaylist() {
    return this.services.youtube.get<MentorPlaylistResponse>(`/playlistItems`, {
      params: {
        part: ['snippet', 'status'],
        maxResults: YOUTUBE_API_MAX_RESULTS_PER_PAGE,
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        playlistId: MENTORSHIP_YOUTUBE_PLAYLIST_ID,
      },
    });
  }
}
