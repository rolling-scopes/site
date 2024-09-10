import { Link } from 'react-router-dom';
import { ROUTES } from '@/app/const';
import { Logo } from '@/shared/ui/logo';

const aboutList = [
  {
    title: 'About RS',
    to: `/${ROUTES.COMMUNITY}/#about-school`,
  },
  {
    title: 'Events',
    to: `/${ROUTES.COMMUNITY}/#events`,
  },
  {
    title: 'Community',
    to: `/${ROUTES.COMMUNITY}/#community`,
  },
  {
    title: 'Merch',
    to: `/${ROUTES.COMMUNITY}/#merch`,
  },
];

export const AboutList = () => {
  return (
    <div className="about-list">
      <Logo type="with-border" />

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
