import { api } from '@/shared/api/api';

export class MentorStore {
  public loadYoutubePlaylist = async () => {
    const res = await api.mentor.queryMentorPlaylist();

    if (res.isSuccess) {
      return res.result;
    }

    throw new Error('Error while loading mentor playlist.');
  };
}

export const mentorStore = new MentorStore();
