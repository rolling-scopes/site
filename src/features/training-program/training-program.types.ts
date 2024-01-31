export interface TrainingProgramProps {
  course: 'awsDev' | 'javascript' | 'awsFundamentals' | 'angular';
}

export type ImageType = Record<TrainingProgramProps['course'], string>;
