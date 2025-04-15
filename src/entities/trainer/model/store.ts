import isError from 'next/dist/lib/is-error';

import { apiCoursesIds } from '@/entities/course/constants';
import { transformTrainers } from '@/entities/trainer/helpers/transform-trainers';
import { api } from '@/shared/api/api';
import { CourseNamesKeys } from 'data';

class TrainerStore {
  constructor() {}

  loadTrainers = async (course: CourseNamesKeys) => {
    try {
      const courseId = apiCoursesIds[course];
      const res = await api.trainer.queryTrainers(courseId);

      if (res.isSuccess) {
        return transformTrainers(res.result);
      }

      throw new Error('Failed to fetch trainers!');
    } catch (e) {
      if (isError(e)) {
        console.error(e);
      }

      return null;
    }
  };
}

export const trainerStore = new TrainerStore();
