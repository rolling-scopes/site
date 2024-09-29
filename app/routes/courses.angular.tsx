import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Course } from '@/entities/course';
import { Angular } from '@/pages/angular';
import { courses } from 'data';

export default function AngularRout() {
  const courses = useLoaderData<Course[]>();

  return (
    <BaseLayout>
      <Angular courses={courses} />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return courses;
};
