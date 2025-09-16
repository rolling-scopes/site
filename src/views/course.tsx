import { courseStore } from '@/entities/course';
import { ApiCoursesIds } from '@/entities/course/types';
import { trainerStore } from '@/entities/trainer';
import { ApiResourceLocale } from '@/shared/types';
import { Section } from '@/shared/types/types';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { CourseHero } from '@/widgets/hero';
import { SectionResolver } from '@/widgets/section-resolver';
import { Trainers } from '@/widgets/trainers';

type CourseProps = {
  id: ApiCoursesIds;
  sections: Section[];
  locale: ApiResourceLocale;
};

export const Course = async ({ id, sections, locale }: CourseProps) => {
  const [trainers, course] = await Promise.all([
    trainerStore.loadTrainers(id, locale),
    courseStore.loadCourse(id),
  ]);

  return (
    <>
      <CourseHero courseName={course.title} />
      <Breadcrumbs />
      {sections.map((section) => (
        <SectionResolver key={section.id} courseEnrollUrl={course.enroll} section={section} />
      ))}
      {trainers && <Trainers trainers={trainers} courseName={course.title} />}
    </>
  );
};
