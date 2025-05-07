import { transformMentorsVideos } from '@/entities/mentor';
import { api } from '@/shared/api/api';
import { filterYoutubePrivateVideos } from '@/shared/helpers/filter-youtube-private-videos';

export class MentorStore {
  public loadYoutubePlaylist = async () => {
    const res = await api.mentor.queryMentorPlaylist();

    if (res.isSuccess) {
      const publicVideos = filterYoutubePrivateVideos(res.result);
      const videoItems = transformMentorsVideos(publicVideos);

      return videoItems;
    }

    throw new Error('Error while loading mentor playlist.');
  };
}

export const mentorStore = new MentorStore();
