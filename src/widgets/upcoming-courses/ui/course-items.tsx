'use client';

import { Course, CourseItem } from '@/entities/course';
import { ROUTES } from '@/shared/constants';
import { getActualData } from '@/shared/helpers/get-actual-data';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import {
  announcementTelegramLink,
  maxUpcomingCoursesQuantity,
} from '@/widgets/upcoming-courses/constants';

type CourseItems = {
  courses: Course[];
};

const emptyText = {
  part1: `Looks like the course board is empty right now. But don't worry — we're cooking up something exciting! Subscribe to our `,
  part2: ` Announcement channel to be the first to know when fresh courses are served.`,
};

export const CourseItems = ({ courses }: CourseItems) => {
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
        <LinkCustom href={ROUTES.COURSES} variant="primary">
          Go to courses
        </LinkCustom>
      </>
    );
  }

  return (
    <Paragraph>
      {emptyText.part1}
      <LinkCustom href={announcementTelegramLink} external>
        Telegram
      </LinkCustom>
      {emptyText.part2}
    </Paragraph>
  );
};
