import classNames from 'classnames/bind';

import { RS_INTRO_URL } from '@/shared/constants';
import { Language } from '@/shared/types';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { videoTitleLocalized } from 'data';

import styles from './about-video.module.scss';

const cx = classNames.bind(styles);

type AboutVideoProps = { lang?: Language };

export const AboutVideo = ({ lang = 'en' }: AboutVideoProps) => {
  return (
    <section className={cx('container')} data-testid="about-video">
      <article className={cx('content')}>
        <WidgetTitle mods="lines">{videoTitleLocalized[lang].title}</WidgetTitle>
        <div className={cx('video-wrapper')}>
          <div className={cx('video-container', 'hide-in-percy')}>
            <iframe
              className={cx('video-frame')}
              loading="lazy"
              title="Introduction to The Rolling Scopes School Online Courses"
              src={RS_INTRO_URL}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </article>
    </section>
  );
};
