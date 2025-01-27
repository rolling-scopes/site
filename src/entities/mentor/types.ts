import { StaticImageData } from 'next/image';

export type MentorFeedback = {
  name: string;
  course: string;
  review: string;
  photo: StaticImageData;
};
