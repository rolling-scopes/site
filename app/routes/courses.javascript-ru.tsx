import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Course } from '@/entities/course';
import { JavaScriptRu } from '@/pages/javascript-ru';
import { courses } from 'data';

export default function JsRuRout() {
  const courses = useLoaderData<Course[]>();

  return (
    <BaseLayout>
      <JavaScriptRu courses={courses} />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return courses;
};
