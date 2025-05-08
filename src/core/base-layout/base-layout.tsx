import { PropsWithChildren } from 'react';

import { Footer, Header, Partnered } from './components';
import { getCourses } from '@/entities/course/api/course-api';

export const BaseLayout = async ({ children }: PropsWithChildren) => {
  const courses = await getCourses();

  return (
    <>
      <Header courses={courses} />
      {children}
      <Partnered />
      <Footer courses={courses} />
    </>
  );
};
