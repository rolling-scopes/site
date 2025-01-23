import { type JSPath } from './courses-data.types';
import reactAngular from '@/shared/assets/icons/react-angular.svg';
import stage1 from '@/shared/assets/stages/stage-1.webp';
import stage2 from '@/shared/assets/stages/stage-2.webp';
import stage3 from '@/shared/assets/stages/stage-3.webp';

export const shortTrackPath: JSPath[] = [
  {
    id: 1,
    title: 'Step 1',
    description:
      'Fill out the application form by January 31. Expect an invitation for an interview.  If there is a large number of applicants, there may be an additional test assignment.',
    imageSrc: stage1,
  },
  {
    id: 2,
    title: 'Step 2',
    description:
      'Entry Interviews: Interviews start on January 27 (to ensure all interviews are completed before Stage#2 begins on February 11). Expect an invitation to register for the course',
    imageSrc: stage3,
  },
  {
    id: 3,
    title: 'Step 3',
    description:
      'Join a team of 12-20 people under the guidance of a mentor. self-study with provided materials, regular Q&A sessions, mock interviews, intensive practice, and a final project.',
    imageSrc: stage2,
  },
  {
    id: 4,
    title: 'Step 4',
    description:
      'At the end of the first month of course, you will decide on a framework with your mentor. Approximate ratio: 60% React / 40% Angular',
    imageSrc: reactAngular,
  },
  {
    id: 5,
    title: 'Step 5',
    description:
      'Development of the final project in a team of 3 people under the guidance of a mentor',
  },
];
