'use client';

import { Course, CourseItem } from '@/entities/course';
import { getActualData } from '@/shared/helpers/get-actual-data';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { maxUpcomingCoursesQuantity } from '@/widgets/upcoming-courses/constants';
import { UpcomingCoursesSectionData } from '@/widgets/upcoming-courses/types';
import { ANNOUNCEMENT_TELEGRAM_LINK } from 'data';

type CourseItems = Required<Pick<UpcomingCoursesSectionData, 'linkLabel' | 'linkUrl'>> & {
  courses: Course[];
};

const emptyText = {
  part1: `Looks like the course board is empty right now. But don't worry — we're cooking up something exciting! Subscribe to our `,
  part2: ` Announcement channel to be the first to know when fresh courses are served.`,
};

export const CourseItems = ({ courses, linkLabel, linkUrl }: CourseItems) => {
  const coursesData = getActualData({
    data: courses,
    filterStale: true,
  });

  const coursesContent = coursesData
    .slice(0, Math.min(coursesData.length, maxUpcomingCoursesQuantity))
    .map(({ title, language, startDate, registrationEndDate, detailsUrl, iconSrc }) => (
      <CourseItem
        title={title}
        language={language}
        startDate={startDate}
        registrationEndDate={registrationEndDate}
        detailsUrl={detailsUrl}
        iconSrc={iconSrc}
        key={title}
      />
    ));

  if (coursesContent.length > 0) {
    return (
      <>
        {coursesContent}
        <LinkCustom href={linkUrl} variant="primary">
          {linkLabel}
        </LinkCustom>
      </>
    );
  }

  return (
    <Paragraph>
      {emptyText.part1}
      <LinkCustom href={ANNOUNCEMENT_TELEGRAM_LINK} external>
        Telegram
      </LinkCustom>
      {emptyText.part2}
    </Paragraph>
  );
};
