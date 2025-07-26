import { courseStore } from '@/entities/course';
import { landingPageStore } from '@/entities/landing-page/model/store';
import { ROUTES } from '@/shared/constants';
import { SectionResolver } from '@/views/course/section-resolver';

export const Home = async () => {
  const [{ sections }, courses] = await Promise.all([
    landingPageStore.loadLandingPage('home'),
    courseStore.loadCourses(),
  ]);

  return sections.map((section, index) => (
    <SectionResolver
      courses={courses}
      anchorId={index.toString()}
      key={section.id}
      courseEnrollUrl={ROUTES.COURSES}
      section={section}
    />
  ));
};
