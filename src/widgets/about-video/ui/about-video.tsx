import classNames from 'classnames/bind';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './about-video.module.scss';

const cx = classNames.bind(styles);

type AboutVideoProps = { lang?: 'en' | 'ru' };

const localizedContent = {
  en: { title: 'RS School video' },
  ru: { title: 'Видео RS School' },
};

export const AboutVideo = ({ lang = 'en' }: AboutVideoProps) => {
  // Needed to prevent flakiness in screenshot tests
  const isRunningInDev = import.meta.env.DEV;

  return (
    <div className={cx('about-video container')}>
      <div className={cx('about-video content')}>
        <WidgetTitle mods="lines">{localizedContent[lang].title}</WidgetTitle>
        <div className={cx('video-wrapper')}>
          <div className={cx('video-container')}>
            {isRunningInDev
              ? (
                  <div className={cx('video-placeholder')}>Video Placeholder</div>
                )
              : (
                  <iframe
                    loading="lazy"
                    title="RS School Intro"
                    src="https://www.youtube.com/embed/n4unZLVpnaU"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  >
                  </iframe>
                )}
          </div>
        </div>
      </div>
    </div>
  );
};
