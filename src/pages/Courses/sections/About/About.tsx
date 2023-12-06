import { Paragraph, Subtitle, Title } from '../../../../components';
import { CourseCard } from '../../../../components/CourseCard';
import { coursesData } from '../coursesData';
import './About.scss';
export const About = () => {
  const [course] = coursesData.filter((course: { title: string }) =>
    course.title.startsWith('React')
  );

  return (
    <div className="about__container container">
      <div className="about__bread_crumb">BreadCrumb / Rs-School</div>
      <div className="about__content">
        <CourseCard {...course} />
        <div className="about__text ">
          <Title text="About RS School" hasAsterisk />
          <Subtitle text="No matter your age, professional employment, or place of residence." />
          <Paragraph>
            RS School offers a unique learning experience as a free, community-based online
            education initiative. The RS School has been run by the Rolling Scopes community since
            2013. Today, over 600 developer-volunteers from various countries and companies assist
            as mentors. We believe in important ideas that guide our mission.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
