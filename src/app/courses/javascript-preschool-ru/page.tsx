import { Metadata } from 'next';
import { getCourseTitle } from '@/shared/helpers/get-course-title';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { JavaScriptPreSchoolRu } from '@/views/javascript-preschool-ru';
import { COURSE_TITLES, courses } from 'data';

const courseName = COURSE_TITLES.JS_PRESCHOOL_RU;

export async function generateMetadata(): Promise<Metadata> {
  return { title: getCourseTitle(courseName) };
}

export default function JsPreRoute() {
  const course = selectCourse(courses, courseName);

  return (
    <>
      {course && (
        <JavaScriptPreSchoolRu
          lang="ru"
          type="Pre-school RU"
          course={course}
          courseName={courseName}
        />
      )}
    </>
  );
}
