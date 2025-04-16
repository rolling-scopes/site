import { API_COURSES_IDS_DICTIONARY } from '@/entities/course/constants';
import { transformTrainers } from '@/entities/trainer/helpers/transform-trainers';
import { api } from '@/shared/api/api';
import { API_LOCALE_DICTIONARY } from '@/shared/constants';
import { Language } from '@/shared/types';
import { CourseNamesKeys } from 'data';

class TrainerStore {
  constructor() {}

  public loadTrainers = async (course: CourseNamesKeys, language: Language = 'en') => {
    try {
      const courseId = API_COURSES_IDS_DICTIONARY[course];
      const locale = API_LOCALE_DICTIONARY[language];

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
