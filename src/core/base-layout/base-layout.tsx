import { PropsWithChildren } from 'react';

import { Footer, Header, Partnered } from './components';
import { courseStore } from '@/entities/course';

export const BaseLayout = async ({ children }: PropsWithChildren) => {
  const courses = await courseStore.loadCourses();

  return (
    <>
      <Header courses={courses} />
      {children}
      <Partnered />
      <Footer courses={courses} />
    </>
  );
};
