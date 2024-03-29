import { Paragraph, Subtitle, Title, CourseCard } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import { type Course } from '@/app/types';
import './about.scss';

export const About = () => {
  const { course: data, loading, hasError } = useCourseByTitle('React');

  const course = data as Course;

  let courseContent;
  if (loading) {
    courseContent = <p>Loading...</p>;
  } else if (hasError) {
    courseContent = <p>Error loading courses. Try again with different course title.</p>;
  } else if (course) {
    courseContent = <CourseCard {...course} />;
  } else {
    courseContent = <p>No React courses found.</p>;
  }

  return (
    <div className="rs-about container">
      <div className="rs-about content">
        <div className="column-2">
          <div className="card-wrapper">{courseContent}</div>
          <div className="info">
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
    </div>
  );
};
