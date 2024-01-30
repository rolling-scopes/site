import { About, Audience, Required, Trainer } from '@/features/nodejs';
import { CourseMain } from '@/features/сourse-main';
import { useTitle } from '@/app/hooks';

export const Nodejs = () => {
  useTitle('Node.js Course · The Rolling Scopes School');

  return (
    <>
      <CourseMain courseType="Node.js course" />
      <Audience />
      <About />
      <Required />
      <Trainer />
    </>
  );
};
