import { BaseLayout } from '@/app/layouts/base-layout/components/base-layout';
import { Courses } from '@/pages/courses';

export default function CoursesRout() {
  return (
    <BaseLayout>
      <Courses />
    </BaseLayout>
  );
}

export const handle = { static: true };
