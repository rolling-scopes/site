import { CourseNamesKeys } from '@/shared/types/types';

export type MentorPlaylistResponse = {
  items: GoogleApiYouTubePlaylistItemResource[];
};

export type MentorshipCourseTitles = Extract<
  CourseNamesKeys,
  'JS / Front-end RU' | 'JS / Front-end EN' | 'Angular' | 'React'
>;
