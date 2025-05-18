import { SectionResolver } from '@/entities/course';
import { Section } from '@/entities/course/types';
import { trainerStore } from '@/entities/trainer';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { HeroCourse } from '@/widgets/hero-course';
import { Trainers } from '@/widgets/trainers';

type CourseProps = {
  name: string;
  sections: Section[];
};

export const Course = async ({ name, sections }: CourseProps) => {
  const trainers = await trainerStore.loadTrainers(name);

  return (
    <>
      <HeroCourse courseName={name} />
      <Breadcrumbs />
      {sections.map((section) => (
        <SectionResolver key={section.id} courseName={name} section={section} />
      ))}
      {trainers && <Trainers trainers={trainers} courseName={name} />}
    </>
  );
};
