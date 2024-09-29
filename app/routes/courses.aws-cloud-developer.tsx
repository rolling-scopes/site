import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Course } from '@/entities/course';
import { AwsDeveloper } from '@/pages/aws-developer';
import { courses } from 'data';

export default function AwsDeveloperRout() {
  const courses = useLoaderData<Course[]>();

  return (
    <BaseLayout>
      <AwsDeveloper courses={courses} />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return courses;
};
