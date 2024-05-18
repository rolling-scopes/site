import { Title } from '@/app/components';

import './about-video.scss';

type AboutVideoProps = { lang?: 'en' | 'ru' };

const LocalizedContent = {
  en: {
    title: 'RS School video',
  },
  ru: {
    title: 'Видео RS School',
  },
};

export const AboutVideo = ({ lang = 'en' }: AboutVideoProps) => {
  return (
    <div className="about-video container">
      <div className="about-video content">
        <Title hasLines text={LocalizedContent[lang].title} />
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
