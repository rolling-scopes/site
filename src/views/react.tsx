import { SectionResolver, courseStore } from '@/entities/course';
import { trainerStore } from '@/entities/trainer';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { Trainers } from '@/widgets/trainers';
import { CourseNames } from 'data';

type ReactProps = {
  courseName: CourseNames['REACT'];
};

export const React = async ({ courseName }: ReactProps) => {
  const trainers = await trainerStore.loadTrainers(courseName);
  const coursePageData = await courseStore.loadCoursePage();

  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      {coursePageData.map((section) => (
        <SectionResolver key={section.id} courseName={courseName} section={section} />
      ))}
      <Communication courseName={courseName} />
      {trainers && <Trainers trainers={trainers} courseName={courseName} />}
    </>
  );
};
