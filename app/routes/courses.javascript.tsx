import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Course } from '@/entities/course';
import { JavaScriptEn } from '@/pages/javascript-en';
import { courses } from 'data';

export default function JsEnRout() {
  const courses = useLoaderData<Course[]>();

  return (
    <BaseLayout>
      <JavaScriptEn courses={courses} />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return courses;
};
