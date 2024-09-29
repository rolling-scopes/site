import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Course } from '@/entities/course';
import { Nodejs } from '@/pages/nodejs';
import { courses } from 'data';

export default function NodejsRout() {
  const courses = useLoaderData<Course[]>();

  return (
    <BaseLayout>
      <Nodejs courses={courses} />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return courses;
};
