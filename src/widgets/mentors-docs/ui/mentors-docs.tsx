import classNames from 'classnames/bind';
import mentorImg from '@/shared/assets/mentor-with-his-students.webp';
import { DiscordIcon, TelegramIcon } from '@/shared/icons';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { SocialMediaItem } from '@/shared/ui/social-media-item';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseTitle, mentorDocsData } from 'data';

import styles from './mentors-docs.module.scss';

const cx = classNames.bind(styles);

type MentorsDocsProps = {
  linkDocs: string;
  linkTelegram: string;
  linkDiscord: string;
  courseTitle: '' | CourseTitle;
  lang?: 'en' | 'ru';
};

export const MentorsDocs = ({ linkDocs, linkTelegram, linkDiscord, courseTitle, lang = 'en' }: MentorsDocsProps) => {
  return (
    <section className={cx('container', 'mentors-docs')}>
      <article className={cx('content', 'docs-wrapper')}>
        <div className={cx('docs')}>
          <WidgetTitle className={cx('title')} mods="asterisk">
            {mentorDocsData[lang].header}
          </WidgetTitle>
          <Paragraph>
            {mentorDocsData[lang].textInfo}
            {' '}
            <LinkCustom
              href={linkDocs}
              external
            >
              {mentorDocsData[lang].textLink}
            </LinkCustom>
            {' '}
            {mentorDocsData[lang].textAfterLink}
            {' '}
            {courseTitle}
            {' '}
            {mentorDocsData[lang].textEnd}
          </Paragraph>
          <div className={cx('additional')}>
            <Paragraph>
              {mentorDocsData[lang].additional}
            </Paragraph>
            <div className={cx('social-media')}>
              <SocialMediaItem title="Telegram" href={linkTelegram} icon={TelegramIcon()} />
              <SocialMediaItem title="Discord" href={linkDiscord} icon={DiscordIcon()} />
            </div>
          </div>
        </div>
        <div className={cx('picture-wrapper')}>
          <Image src={mentorImg} alt={mentorDocsData[lang].pictureAlt} className={cx('picture')} />
        </div>
      </article>
    </section>
  );
};
