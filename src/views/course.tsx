import { courseStore } from '@/entities/course';
import { ApiCoursesIds } from '@/entities/course/types';
import { trainerStore } from '@/entities/trainer';
import { ApiResourceLocale } from '@/shared/types';
import { Section } from '@/shared/types/types';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroCourse } from '@/widgets/hero-course';
import { SectionResolver } from '@/widgets/section-resolver';
import { Trainers } from '@/widgets/trainers';

type CourseProps = {
  id: ApiCoursesIds;
  sections: Section[];
  name: string;
  locale: ApiResourceLocale;
};

export const Course = async ({ id, name, sections, locale }: CourseProps) => {
  const [trainers, course] = await Promise.all([
    trainerStore.loadTrainers(id, locale),
    courseStore.loadCourse(id),
  ]);

  return (
    <>
      <HeroCourse courseName={name} />
      <Breadcrumbs />
      {sections.map((section) => (
        <SectionResolver key={section.id} courseEnrollUrl={course.enroll} section={section} />
      ))}
      {trainers && <Trainers trainers={trainers} courseName={name} />}
    </>
  );
};
