import { buildCourseUrl } from '@/entities/course/helpers/build-course-url';
import { Course, CoursesResponse } from '@/entities/course/types';
import { TO_BE_DETERMINED } from '@/shared/constants';
import { findAssetImageById } from '@/shared/helpers/find-asset-image-by-id';

export function transformCourses(coursesResponse: CoursesResponse, isMentorship: boolean = false): Course[] {
  const courseItems = coursesResponse.items;

  return courseItems.map((course): Course => {
    const id = course.sys.id;
    const title = course.fields.name;
    const subTitle = course.fields.subTitle;
    const descriptionUrl = course.fields.url;
    const courseAssets = coursesResponse.includes?.Asset;
    const startDate = TO_BE_DETERMINED;
    const registrationEndDate = TO_BE_DETERMINED;
    const language = new Set(course.fields.language);
    const mode = course.fields.mode;
    const detailsUrl = buildCourseUrl(course.fields.url, isMentorship);
    const backgroundStyle = {
      backgroundColor: course.fields.backgroundColor,
      accentColor: course.fields.accentColor,
    };
    const personalMentoringStartDate = null;
    const personalMentoringEndDate = null;

    const iconId = course.fields.icon?.sys.id;
    const iconSrc = findAssetImageById(courseAssets, iconId);

    const iconSmallId = course.fields.iconSmall?.sys.id;
    const iconSmall = findAssetImageById(courseAssets, iconSmallId);

    const iconFooterId = course.fields.iconFooter?.sys.id;
    const iconFooter = findAssetImageById(courseAssets, iconFooterId);

    const secondaryIconId = course.fields.secondaryIcon?.sys.id;
    const secondaryIcon = findAssetImageById(courseAssets, secondaryIconId);

    return {
      id,
      title,
      subTitle,
      descriptionUrl,
      iconSrc,
      iconSmall,
      iconFooter,
      secondaryIcon,
      startDate,
      registrationEndDate,
      language,
      mode,
      detailsUrl,
      backgroundStyle,
      personalMentoringStartDate,
      personalMentoringEndDate,
    };
  });
}
