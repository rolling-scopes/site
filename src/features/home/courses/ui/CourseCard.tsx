type PropsType = {
  title: string;
  language: ('en' | 'ru')[];
  startDate: string;
  detailsUrl: string;
  buttonText: string;
  icon: JSX.Element | null;
};

export const CourseCard = ({
  title,
  language,
  startDate,
  detailsUrl,
  buttonText,
  icon,
}: PropsType) => {
  return (
    <div className="course-card">
      <div className="icon-container">{icon}</div>
      <div className="course-info">
        <div className="name">{title}</div>
        <div className="date">{`${startDate} • ${language[0].toUpperCase()}`}</div>
      </div>
      <div className="details-container">
        <a className="details" href={detailsUrl} target="_blank" rel="noreferrer">
          {buttonText && <span className="label">{buttonText}</span>}
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
