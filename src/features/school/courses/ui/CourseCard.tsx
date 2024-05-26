import { LinkCustom } from '@/app/components';
import { Course } from '@/app/types';
import { ArrowIcon } from '@/icons';

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
        <LinkCustom href={detailsUrl} button={true} size="small" rounded={true}>
          {buttonText} <ArrowIcon size="16px" invertColor={true} />
        </LinkCustom>
      </div>
    </section>
  );
};

export default CourseCard;
