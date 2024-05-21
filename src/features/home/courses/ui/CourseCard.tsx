import { Course } from '@/app/types';

type addFields = {
  buttonText: string;
  icon: JSX.Element | null;
};

type PropsType = Pick<Course, 'title' | 'language' | 'startDate' | 'detailsUrl'> & addFields;

export const CourseCard = ({
  title,
  language,
  startDate,
  detailsUrl,
  buttonText,
  icon,
}: PropsType) => {
  return (
    <section className="course-card">
      <figure className="icon-container">{icon}</figure>
      <div className="course-info">
        <p className="name">{title}</p>
        <p className="date">{`${startDate} • ${language[0].toUpperCase()}`}</p>
      </div>
      <div className="details-container">
        <a className="details" href={detailsUrl} target="_blank" rel="noreferrer">
          {buttonText && <span className="label">{buttonText}</span>}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </section>
  );
};

export default CourseCard;
