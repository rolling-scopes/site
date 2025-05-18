import { SectionResolver } from '@/entities/course';
import { ApiCoursesIds, Section } from '@/entities/course/types';
import { trainerStore } from '@/entities/trainer';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroCourse } from '@/widgets/hero-course';
import { Trainers } from '@/widgets/trainers';

type CourseProps = {
  id: ApiCoursesIds;
  sections: Section[];
  name: string;
};

export const Course = async ({ id, name, sections }: CourseProps) => {
  const trainers = await trainerStore.loadTrainers(name);

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
