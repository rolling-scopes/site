import { Link } from 'react-router-dom';
import { LogoWrapper } from './logo-wrapper';

const aboutList = [
  {
    title: 'About RS',
    to: '/#about'
  },
  {
    title: 'Events',
    to: '/#events'
  },
  {
    title: 'Community',
    to: '/#community'
  },
  {
    title: 'Merch',
    to: '/#merch'
  }
];

export const AboutList = () => {
  return (
    <div className="about-list">
      <LogoWrapper />
      <ul className="about-links">
        {aboutList.map(({ title, to }) => (
          <li key={to}>
            <Link to={to}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
