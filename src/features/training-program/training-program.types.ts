import { type CourseType } from '@/app/types';

export interface TrainingProgramProps {
  courseName: string;
  type?: CourseType;
}

export type ImageType = Record<TrainingProgramProps['courseName'], string>;
