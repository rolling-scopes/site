import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

import { CourseNamesKeys } from 'data';

export type MentorFeedback = {
  name: string;
  course?: string;
  review: ReactNode[];
  photo: StaticImageData;
};

export type MentorPlaylistResponse = {
  items: GoogleApiYouTubePlaylistItemResource[];
};

export type MentorshipCourseTitles = Extract<
  CourseNamesKeys,
  'JS / Front-end RU' | 'JS / Front-end EN' | 'Angular' | 'React'
>;
