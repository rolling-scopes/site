import { courseStore } from '@/entities/course';
import { LANDING_PAGE_SLUG } from '@/entities/landing-page/constants';
import { landingPageStore } from '@/entities/landing-page/model/store';
import { SectionResolver } from '@/widgets/section-resolver';

export const Home = async () => {
  const [{ sections }, courses] = await Promise.all([
    landingPageStore.loadLandingPage(LANDING_PAGE_SLUG.HOME),
    courseStore.loadCourses(),
  ]);

  return sections.map((section, index) => (
    <SectionResolver
      courses={courses}
      anchorId={index.toString()}
      key={section.id}
      section={section}
    />
  ));
};
