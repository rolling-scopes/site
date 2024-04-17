import { type JSPath } from './courses-data.types';
import stage1 from '@/assets/stages/stage-1.webp';
import stage2 from '@/assets/stages/stage-2.webp';
import stage3 from '@/assets/stages/stage-3.webp';

export const jsPath: JSPath[] = [
  {
    id: 1,
    title: 'Stage 1',
    description:
      'Everyone registered is automatically eligible for this stage. The first stage lasts 15 weeks. This stage includes practical assignments and tests. Evaluation is either automatic or in the form of cross-checking between students.',
    imageSrc: stage1,
    topics: ['Git', 'HTML', 'CSS', 'Javascript basics'],
  },
  {
    id: 2,
    title: 'Stage 2',
    description:
      'To pass to the second stage, you must successfully complete the tasks and tests from the first stage without missing the deadlines, and pass a mock technical interview with one of our mentors.The second stage lasts 20 weeks. You will be assigned a personal mentor who will answer your questions from now on. This stage includes practical exercises and tests which will be reviewed and evaluated by your mentor.',
    imageSrc: stage2,
    topics: [
      'Advanced Javascript',
      'Security',
      'Testing',
      'Agile',
      'Networking',
      'web development tools',
    ],
  },
  {
    id: 3,
    title: 'Stage 3',
    description:
      'Learning either React or Angular Framework (the choice belongs to the student). To enroll, you need to successfully complete two stages of training. Format: mentoring, self-study, webinars, and communication on Discord. Practical sessions are reviewed and evaluated by mentors, as well as through cross-checking methods. Throughout the training, mock interviews are conducted with different mentors.',
    imageSrc: stage3,
    actions: [
      'Choose a Framework: React or Angular.',
      'Collaborative development of a final project.',
      'Framework-based interviews.',
    ],
  },
];
