import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Course } from '@/entities/course';
import { AwsFundamentals } from '@/pages/aws-fundamentals';
import { courses } from 'data';

export default function AwsFundamentalsRout() {
  const courses = useLoaderData<Course[]>();

  return (
    <BaseLayout>
      <AwsFundamentals courses={courses} />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return courses;
};
