import { ApiCoursesIds } from '@/entities/course/types';
import { trainerStore } from '@/entities/trainer';
import { ApiResourceLocale } from '@/shared/types';
import { SectionResolver } from '@/views/course/section-resolver';
import { Section } from '@/views/course/types';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroCourse } from '@/widgets/hero-course';
import { Trainers } from '@/widgets/trainers';

type CourseProps = {
  id: ApiCoursesIds;
  sections: Section[];
  name: string;
  locale: ApiResourceLocale;
};

export const Course = async ({ id, name, sections, locale }: CourseProps) => {
  const trainers = await trainerStore.loadTrainers(id, locale);

  return (
    <>
      <HeroCourse courseName={name} />
      <Breadcrumbs />
      {sections.map((section) => (
        <SectionResolver key={section.id} courseId={id} section={section} />
      ))}
      {trainers && <Trainers trainers={trainers} courseName={name} />}
    </>
  );
};
