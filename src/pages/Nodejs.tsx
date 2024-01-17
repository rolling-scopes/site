import { About, Audience, Required, Trainer } from '@/features/nodejs';
import { CourseMain } from '@/features/сourseMain/CourseMain';
import { useTitle } from '@/shared/hooks';

export const Nodejs = () => {
  useTitle('Node.js Course · The Rolling Scopes School');

  return (
    <>
      <CourseMain />
      <Audience />
      <About />
      <Required />
      <Trainer />
    </>
  );
};
