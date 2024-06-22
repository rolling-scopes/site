import { Link } from 'react-router-dom';
import { LogoWrapper } from '@/shared/ui/logo-wrapper';

const aboutList = [
  {
    title: 'About RS',
    to: '/community/#about',
  },
  {
    title: 'Events',
    to: '/community/#events',
  },
  {
    title: 'Community',
    to: '/community/#community',
  },
  {
    title: 'Merch',
    to: '/community/#merch',
  },
];

export const AboutList = () => {
  return (
    <div className="about-list">
      <Link to="/">
        <LogoWrapper type="footer" />
      </Link>
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
