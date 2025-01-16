import classNames from 'classnames/bind';

import { VideoPlaylistWithPlayer } from '@/shared/ui/video-playlist-with-player';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors-feedback.module.scss';

const cx = classNames.bind(styles);

export const MentorsFeedback = () => {
  return (
    <section className={cx('container')} data-testid="mentors-feedback">
      <div className={cx('content')}>
        <WidgetTitle mods="asterisk">Mentors’ Feedback</WidgetTitle>
        <div className={cx('video-wrapper')}>
          <VideoPlaylistWithPlayer apiKey={process.env.YOUTUBE_API_KEY} playlistId="PLzLiprpVuH8f7Jg8pgZUCeTN-Q6uVZNhg" />
        </div>
      </div>
    </section>
  );
};
