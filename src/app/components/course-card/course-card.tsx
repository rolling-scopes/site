import { Link } from 'react-router-dom';
import { type Course } from '@/app/types';
import micIcon from '@/assets/icons/mic.svg';
import noteIcon from '@/assets/icons/note-icon.svg';
import { Arrow } from '@/icons/arrow';

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
        <img src={iconSrc} alt={title} />
        <h3 className="rs-course-card__title">{title}</h3>
      </div>
      <div className="rs-course-card__bottom">
        <div className="rs-course-card__left">
          <div className="rs-course-card__date-info">
            <img src={noteIcon} alt="note-icon" className="rs-course-card__note-icon" />
            <span className="rs-course-card__date">Start {startDate}</span>
          </div>
          <div className="rs-course-card__lang-info">
            <img src={micIcon} className="rs-course-card__mic-icon" />
            <span className="rs-course-card__lang">{lang}</span>
            <span className="rs-course-card__mode">• {mode}</span>
          </div>
        </div>
        <Link to={detailsUrl} className="rs-course-card__more">
          View details
          <span className="rs-course-card__more__arrow">
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  );
};
