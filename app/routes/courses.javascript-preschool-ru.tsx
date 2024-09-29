import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Course } from '@/entities/course';
import { JavaScriptPreSchoolRu } from '@/pages/javascript-preschool-ru';
import { courses } from 'data';

export default function JsPreRout() {
  const courses = useLoaderData<Course[]>();

  return (
    <BaseLayout>
      <JavaScriptPreSchoolRu courses={courses} />
    </BaseLayout>
  );
}

export const loader: LoaderFunction = async () => {
  return courses;
};
