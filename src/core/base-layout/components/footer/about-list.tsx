import Link from 'next/link';
import { ANCHORS, ROUTES } from '@/core/const';
import { Logo } from '@/shared/ui/logo';

const aboutList = [
  {
    title: 'About RS',
    to: `/${ROUTES.COMMUNITY}/#${ANCHORS.ABOUT_SCHOOL}`,
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
            <Link href={to}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
