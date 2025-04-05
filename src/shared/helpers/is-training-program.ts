import { COURSE_TITLES, TrainingProgramType } from 'data';

export function isTrainingProgramType(value: string): value is TrainingProgramType {
  const trainingProgramValues: TrainingProgramType[] = [
    ...Object.values(COURSE_TITLES),
  ];

  return trainingProgramValues.includes(value as TrainingProgramType);
}
