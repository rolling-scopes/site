import { type Course } from '@/app/types';
import { ArrowIcon } from '@/shared/icons';
import { DateLang } from '@/shared/ui/date-lang';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';

import './course-card.scss';

export type CourseCardProps = Pick<
  Course,
  'title' | 'iconSrc' | 'startDate' | 'detailsUrl' | 'mode' | 'language' | 'backgroundStyle'
>;

export const CourseCard = ({
  title,
  iconSrc,
  startDate,
  detailsUrl,
  mode,
  language,
  backgroundStyle,
}: CourseCardProps) => {
  const { backgroundColor, accentColor } = backgroundStyle;

  const cardStyle = {
    backgroundColor: backgroundColor,
    '--accent-bg-color': accentColor,
  };

  return (
    <div className="rs-course-card">
      <div className="rs-course-card__top" style={cardStyle}>
        <Image src={iconSrc} alt={title} />
        <h3 className="rs-course-card__title">{title}</h3>
      </div>
      <div className="rs-course-card__bottom">
        <DateLang startDate={startDate} language={language} mode={mode} />
        <div className="rs-course-card__right">
          <LinkCustom href={detailsUrl} icon={<ArrowIcon size="16px" />} variant="rounded">
            View details
          </LinkCustom>
        </div>
      </div>
    </div>
  );
};
