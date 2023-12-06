import React from 'react';
import './CourseCard.scss';
import noteIcon from '../../icons/noteIcon.png';
import micIcon from '../../icons/mic.png';

type CourseCardProps = {
  title?: string;
  iconSrc?: string;
  startDate: string;
  mode: string;
  language: ('en' | 'ru')[];
  detailsUrl: string;
  background?: string;
};

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  iconSrc,
  startDate,
  detailsUrl,
  mode,
  language,
  background
}) => {
  const lang = language.join(' / ');

  return (
    <div className="course-card">
      <div className="course-card__top">
        <img src={iconSrc} alt={title} />
        <h3 className="course-card__title">{title}</h3>
      </div>
      <div className="course-card__bottom">
        <div className="course-card__left">
          <div className="course-card__date-info">
            <img src={noteIcon} alt="note-icon" className="course-card__note-icon" />
            <div className="course-card__date">Start {startDate}</div>
          </div>
          <div className="course-card__lang-info">
            <img src={micIcon} className="course-card__mic-icon" />
            <div className="course-card__lang">{lang}</div>
            <div className="course-card__mode">• {mode}</div>
          </div>
        </div>
        <div className="course-card__right">
          <a href={detailsUrl} className="course-card__more">
            View details<span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  );
};
