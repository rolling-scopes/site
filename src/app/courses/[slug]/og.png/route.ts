import { courseStore } from '@/entities/course';
import { resolveCoursePageLocale } from '@/entities/course/helpers/resolve-course-page-locale';
import { coursePageStore } from '@/entities/course-page';
import { fetchAndConvertToDataUri } from '@/shared/og/utils/fetch-and-convert-to-data-uri';
import { loadImageAsDataUri } from '@/shared/og/utils/load-image-as-data-uri';
import { createCourseTree } from '@/shared/og/view/courses-tree/generate-courses-tree';

export const preferredRegion = 'auto';
const fallbackPath = 'src/shared/assets/svg/rss-logo.svg';
const logoFallbackSize = 250;

export async function generateStaticParams() {
  const pages = await coursePageStore.loadCoursePages();

  return pages.map(({ slug }) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = resolveCoursePageLocale(slug);

  const { courseName, courseId } = await coursePageStore.loadCoursePage(slug, locale);

  const course = await courseStore.loadCourse(courseId);

  if (!course) {
    throw new Error(`Course metadata not found for id="${courseId}"`);
  }

  const logoWidth = course.iconSrc.width ?? logoFallbackSize;
  const logoHeight = course.iconSrc.height ?? logoFallbackSize;
  const logoCache = new Map<string, string>();

  let logoDataUri: string | undefined = logoCache.get(course.iconSrc.src);

  try {
    logoDataUri = await fetchAndConvertToDataUri(course.iconSrc.src);
    logoCache.set(course.iconSrc.src, logoDataUri);
  } catch (err) {
    console.warn('Failed to load remote logo, using fallback', err);
    logoDataUri = await loadImageAsDataUri(fallbackPath);
  }

  return createCourseTree({
    name: courseName,
    logo: {
      src: logoDataUri,
      width: logoWidth,
      height: logoHeight,
    },
    startDate: course.startDate,
  });
}
