import { Course } from '@/app/types';
import { ArrowIcon } from '@/shared/icons';
import Image from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';

type addFields = {
  buttonText: string;
  iconSrc: string;
};

type PropsType = Pick<Course, 'title' | 'language' | 'startDate' | 'detailsUrl'> & addFields;

export const CourseCard = ({
  title,
  language,
  startDate,
  detailsUrl,
  buttonText,
  iconSrc,
}: PropsType) => {
  return (
    <section className="course-card">
      <figure className="icon-container">
        <Image src={iconSrc} alt={title} />
      </figure>
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
