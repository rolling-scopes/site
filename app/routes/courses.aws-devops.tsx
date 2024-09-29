import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Course } from '@/entities/course';
import { AwsDevOps } from '@/pages/aws-devops';
import { courses } from 'data';

export default function AwsDevOpsRout() {
  const courses = useLoaderData<Course[]>();

  return (
    <BaseLayout>
      <AwsDevOps courses={courses} />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return courses;
};
