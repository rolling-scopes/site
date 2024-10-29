import classNames from 'classnames/bind';
import { Language } from '@/shared/types.ts';
import { Image } from '@/shared/ui/image';
import { List } from '@/shared/ui/list';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { ImageLink, aboutMentorsData } from 'data';

import styles from './about-mentors.module.scss';

const cx = classNames.bind(styles);

type AboutMentorsProps = {
  icons: ImageLink[];
  description: string[];
  lang?: Language;
};

export const AboutMentors = ({ icons, description, lang = 'en' }: AboutMentorsProps) => {
  return (
    <section className={cx('container')}>
      <div className={cx('content')}>
        <WidgetTitle mods="lines">{aboutMentorsData[lang].header}</WidgetTitle>
        <div className={cx('mentors-register-wrapper')}>
          <List data={description} />
          <div className={cx('picture-wrapper')}>
            {icons.map((icon) => {
              return (
                <Image key={icon.href} src={icon.href} alt={icon.alt} className={cx('picture')} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
