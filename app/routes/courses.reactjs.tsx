import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Course } from '@/entities/course';
import { React } from '@/pages/react';
import { courses } from 'data';

export default function ReactRout() {
  const courses = useLoaderData<Course[]>();

  return (
    <BaseLayout>
      <React courses={courses} />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return courses;
};
