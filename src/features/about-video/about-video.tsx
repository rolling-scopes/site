import { Title } from '@/app/components';

import './about-video.scss';

export const AboutVideo = () => {
  return (
    <div className="about-video container">
      <div className="about-video content">
        <Title hasLines text="RS School video" />
        <div className="video-wrapper">
          <div className="video-container">
            <iframe
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
