import { Link } from 'react-router-dom';
import { LogoWrapper } from '@/app/components';
import { buildUrl } from '@/app/services/platform';

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
      <Link to={buildUrl('/')} onClick={() => window.scrollTo({ top: 0 })}>
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
