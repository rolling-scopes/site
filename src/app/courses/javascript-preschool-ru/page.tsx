import { Metadata } from 'next';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { JavaScriptPreSchoolRu } from '@/views/javascript-preschool-ru';
import { COURSE_TITLES, courses } from 'data';

const courseName = COURSE_TITLES.JS_PRESCHOOL_RU;

export async function generateMetadata(): Promise<Metadata> {
  const course = selectCourse(courses, courseName);
  const title = `${course?.title || ''} · The Rolling Scopes School`;

  return { title };
}

export default function JsPreRoute() {
  const lang = 'ru';
  const type = 'Pre-school RU';
  const course = selectCourse(courses, courseName);

  return (
    <>
      {course && (
        <JavaScriptPreSchoolRu lang={lang} type={type} course={course} courseName={courseName} />
      )}
    </>
  );
}
