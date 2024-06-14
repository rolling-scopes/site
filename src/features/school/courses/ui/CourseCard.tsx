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
        <LinkCustom
          href={detailsUrl}
          icon={<ArrowIcon size="16px" />}
          variant="colored"
          button
          size="small"
          rounded
        >
          {buttonText}
        </LinkCustom>
      </div>
    </section>
  );
};

export default CourseCard;
