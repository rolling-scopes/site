import { transformTrainers } from '@/entities/trainer/helpers/transform-trainers';
import { api } from '@/shared/api/api';
import { ApiResourceLocale } from '@/shared/types';

class TrainerStore {
  public loadTrainers = async (courseId: string, locale: ApiResourceLocale = 'en-US') => {
    try {
      // TODO: move trainers to course page section?
      const res = await api.trainer.queryTrainers(courseId, locale);

      if (res.isSuccess) {
        return transformTrainers(res.result);
      }
    } catch (e) {
      console.error(e);
    }
  };
}

export const trainerStore = new TrainerStore();
