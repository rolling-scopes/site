import classNames from 'classnames/bind';
import { Image } from '@/shared/ui/image';
import { List } from '@/shared/ui/list';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { aboutMentorsData } from 'data';

import styles from './about-mentors.module.scss';

const cx = classNames.bind(styles);

type AboutMentorsProps = {
  icons: {
    href: string;
    alt: string;
  }[];
  description: string[];
  lang?: 'en' | 'ru';
};

export const AboutMentors = ({ icons, description, lang = 'en' }: AboutMentorsProps) => {
  return (
    <section className={cx('container')}>
      <div className={cx('content')}>
        <WidgetTitle mods="lines">{aboutMentorsData[lang].header}</WidgetTitle>
        <div className={cx('mentors-register-wrapper')}>
          <List data={description} />
          <div className={cx('picture-wrapper')}>
            {icons.map((icon, index) => {
              return (
                <Image key={index} src={icon.href} alt={icon.alt} className={cx('picture')} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
