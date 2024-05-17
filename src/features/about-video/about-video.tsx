import { Title } from '@/app/components';

import './about-video.scss';

type AboutVideoProps = { language?: 'en' | 'ru' };
export const AboutVideo = ({ language = 'en' }: AboutVideoProps) => {
  return (
    <div className="about-video container">
      <div className="about-video content">
        <Title hasLines text={language === 'en' ? 'RS School video' : 'Видео RS School'} />
        <div className="video-wrapper">
          <div className="video-container">
            <iframe
              loading="lazy"
              title="RS School Intro"
              src="https://www.youtube.com/embed/n4unZLVpnaU"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
