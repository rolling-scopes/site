import { Link } from 'react-router-dom';
import './school-menu.scss';

export const SchoolMenu = () => {
  return (
    <div className="school-menu">
      <h3 className="heading">RS SCHOOL</h3>
      <ul className="school-list">
        <li className="school-item">
          <Link to="/courses" onClick={() => window.scrollTo({ top: 0 })}>
            About RS School
          </Link>
          <small>Free online education</small>
        </li>
        <li className="school-item">
          <Link to="/courses#upcoming-courses">Upcoming courses</Link>
          <small>Schedule your study</small>
        </li>
        <li className="school-item">
          <Link to="/courses#learning-path">IT Journey</Link>
          <small>Plan your developer path</small>
        </li>
        <li className="school-item">
          <Link to="/courses#mentors-wanted">Mentoring</Link>
          <small>Contribute and study</small>
        </li>
      </ul>
    </div>
  );
};
