import { courseStore } from '@/entities/course';
import { resolveCoursePageLocale } from '@/entities/course/helpers/resolve-course-page-locale';
import { fetchAndConvertToDataUri } from '@/shared/og/utils/fetch-and-convert-to-data-uri';
import { loadImageAsDataUri } from '@/shared/og/utils/load-image-as-data-uri';
import { createCourseTree } from '@/shared/og/view/courses-tree/generate-courses-tree';
import { coursePageStore } from '@/views/course/model/store';

export const preferredRegion = 'auto';
const FALLBACK_PATH = 'src/shared/assets/svg/rss-logo.svg';

export async function generateStaticParams() {
  const pages = await coursePageStore.loadCoursePages();

  return pages.map(({ slug }) => ({ slug }));
}

export async function GET(
  _: never,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const locale = resolveCoursePageLocale(slug);

  const { courseName, courseId } = await coursePageStore.loadCoursePage(slug, locale);

  const allCourses = await courseStore.loadCourses();

  const meta = allCourses.find((c) => c.id === courseId);

  if (!meta) {
    throw new Error(`Course metadata not found for id="${courseId}"`);
  }

  const LOGO_FALLBACK_SIZE = 250;

  const logoWidth = meta.iconSrc.width || LOGO_FALLBACK_SIZE;
  const logoHeight = meta.iconSrc.height || LOGO_FALLBACK_SIZE;

  let logoDataUri: string;

  try {
    logoDataUri = await fetchAndConvertToDataUri(meta.iconSrc.src);
  } catch (err) {
    console.warn('Failed to load remote logo, using fallback', err);
    logoDataUri = await loadImageAsDataUri(FALLBACK_PATH);
  }

  return createCourseTree({
    name: courseName,
    logo: {
      src: logoDataUri,
      width: logoWidth,
      height: logoHeight,
    },
    startDate: meta.startDate,
  });
}
