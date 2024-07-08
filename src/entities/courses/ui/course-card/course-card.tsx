/* eslint-disable @stylistic/jsx-one-expression-per-line */
import { type Course } from '@/app/types';
import micIcon from '@/shared/assets/icons/mic.svg';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { ArrowIcon } from '@/shared/icons';
import Image from '@/shared/ui/image';
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
  const lang = language.join(' / ');

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
        <div className="rs-course-card__left">
          <div className="rs-course-card__date-info">
            <Image src={noteIcon} alt="note-icon" className="rs-course-card__note-icon" />
            <div className="rs-course-card__date">Start {startDate}</div>
          </div>
          <div className="rs-course-card__lang-info">
            <Image src={micIcon} className="rs-course-card__mic-icon" />
            <div className="rs-course-card__lang">{lang}</div>
            <div className="rs-course-card__mode">• {mode}</div>
          </div>
        </div>
        <div className="rs-course-card__right">
          <LinkCustom href={detailsUrl} icon={<ArrowIcon size="16px" />} variant="roundedSmall">
            View details
          </LinkCustom>
        </div>
      </div>
    </div>
  );
};
