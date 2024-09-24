import classNames from 'classnames/bind';
import { RS_INTRO_URL } from '@/shared/constants';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { videoTitleLocalized } from 'data';

import styles from './about-video.module.scss';

const cx = classNames.bind(styles);

type AboutVideoProps = { lang?: 'en' | 'ru' };

export const AboutVideo = ({ lang = 'en' }: AboutVideoProps) => {
  // Needed to prevent flakiness in screenshot tests
  const isRunningInDev = import.meta.env.DEV;

  return (
    <section className={cx('container')} data-testid="about-video">
      <article className={cx('content')}>
        <WidgetTitle mods="lines">{videoTitleLocalized[lang].title}</WidgetTitle>
        <div className={cx('video-wrapper')}>
          <div className={cx('video-container')}>
            {isRunningInDev
              ? (
                  <div className={cx('video-placeholder')}>Video Placeholder</div>
                )
              : (
                  <iframe
                    className={cx('video-frame')}
                    loading="lazy"
                    title="Introduction to The Rolling Scopes School Online Courses"
                    src={RS_INTRO_URL}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  >
                  </iframe>
                )}
          </div>
        </div>
      </article>
    </section>
  );
};
