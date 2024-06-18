import { Link } from 'react-router-dom';
import { buildUrl } from '@/app/services/platform';
import { LogoWrapper } from '@/shared/ui/logo-wrapper';

const aboutList = [
  {
    title: 'About RS',
    to: buildUrl('/#about'),
  },
  {
    title: 'Events',
    to: buildUrl('/#events'),
  },
  {
    title: 'Community',
    to: buildUrl('/#community'),
  },
  {
    title: 'Merch',
    to: buildUrl('/#merch'),
  },
];

export const AboutList = () => {
  return (
    <div className="about-list">
      <Link to={buildUrl('/')}>
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
