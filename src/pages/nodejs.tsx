import { About, Audience, Required, Trainer } from '@/features/nodejs';
import { CourseMain } from '@/features/сourse-main';

export const Nodejs = () => {
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
