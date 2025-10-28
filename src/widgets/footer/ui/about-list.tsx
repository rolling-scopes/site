import { ANCHORS, ROUTES } from '@/shared/constants';
import { ApiResourceLocale } from '@/shared/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Logo } from '@/shared/ui/logo';

const aboutList = {
  'en-US': [
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
  ],
  'ru': [
    {
      title: 'Про RS School',
      to: `/${ROUTES.COMMUNITY}/#${ANCHORS.ABOUT_SCHOOL}`,
    },
    {
      title: 'События',
      to: `/${ROUTES.COMMUNITY}/#events`,
    },
    {
      title: 'Сообщество',
      to: `/${ROUTES.COMMUNITY}/#community`,
    },
    {
      title: 'Мерч',
      to: `/${ROUTES.COMMUNITY}/#merch`,
    },
  ],
} as const;

type AboutListProps = {
  lang: ApiResourceLocale;
};

export const AboutList = ({ lang }: AboutListProps) => {
  return (
    <div className="about-list">
      <Logo type="with-border" />

      <ul className="about-links">
        {aboutList[lang].map(({ title, to }) => (
          <li key={to}>
            <LinkCustom href={to}>{title}</LinkCustom>
          </li>
        ))}
      </ul>
    </div>
  );
};
