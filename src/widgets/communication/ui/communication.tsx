import classNames from 'classnames/bind';
import { communicationSectionLocales } from './locales';
import { replaceLinkInText } from '../utils/replace-link-in-text';
import discordLogo from '@/shared/assets/svg/discord-logo.svg';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import {
  CourseNamesChannels,
  DISCORD_LINKS,
  RS_DOCS_COMMUNICATION_LINK,
  RS_DOCS_TELEGRAM_CHATS_LINK,
} from 'data';

import styles from './communication.module.scss';

const cx = classNames.bind(styles);

type CommunicationProps = {
  courseName: CourseNamesChannels;
  lang?: 'ru' | 'en';
};

export const Communication = ({ courseName, lang = 'en' }: CommunicationProps) => {
  const {
    title,
    subTitle,
    firstParagraph,
    discordLink,
    secondParagraph,
    telegramLink,
    thirdParagraph,
    rsDocsLink,
  } = communicationSectionLocales[lang];

  return (
    <section className={cx('container')}>
      <article className={cx('content', 'communication-content')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>
        <div className={cx('communication-text')}>
          <figure className={cx('discord-logo-wrapper')}>
            <Image src={discordLogo} alt="discord logo" />
          </figure>
          <div>
            <Subtitle>{subTitle}</Subtitle>
            <Paragraph className={cx('communication-paragraph')}>
              {replaceLinkInText(
                firstParagraph,
                '<discord-link>',
                DISCORD_LINKS[courseName],
                discordLink,
              )}
            </Paragraph>
            <Paragraph className={cx('communication-paragraph')}>
              {replaceLinkInText(
                secondParagraph,
                '<telegram-link>',
                RS_DOCS_TELEGRAM_CHATS_LINK,
                telegramLink,
              )}
            </Paragraph>
            <Paragraph className={cx('communication-paragraph')}>
              {replaceLinkInText(
                thirdParagraph,
                '<rs-docs-link>',
                RS_DOCS_COMMUNICATION_LINK,
                rsDocsLink,
              )}
            </Paragraph>
          </div>
        </div>
      </article>
    </section>
  );
};
