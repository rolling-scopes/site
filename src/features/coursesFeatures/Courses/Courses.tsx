import { CourseCard } from '@/widgets';
import { coursesData } from '../coursesData';
import './Courses.scss';
export const Courses = () => {
  const upcomingCourses = coursesData.filter(
    ({ title }) => !title.toLowerCase().startsWith('node')
  );

  return (
    <div className="rs-courses container">
      <div className="rs-courses content">
        <div className="title">Upcoming courses</div>
        <div className="rs-courses-wrapper">
          {upcomingCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};
