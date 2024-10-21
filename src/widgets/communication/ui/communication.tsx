import classNames from 'classnames/bind';
import discordLogo from '@/shared/assets/svg/discord-logo.svg';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import {
  CourseNamesChannels,
  DISCORD_LINKS,
  JS_EN_TELEGRAM_CHAT_LINK,
  RS_DOCS_COMMUNICATION_LINK,
  RS_DOCS_TELEGRAM_CHATS_LINK,
  communicationText,
} from 'data';

import styles from './communication.module.scss';

const cx = classNames.bind(styles);

const JS_EN_COURSE = 'js / front-end en';

type CommunicationProps = {
  courseName: CourseNamesChannels;
  lang?: 'ru' | 'en';
};

export const Communication = ({ courseName, lang = 'en' }: CommunicationProps) => {
  const {
    title,
    subTitle,
    subTitleJs,
    firstParagraphFirstHalf,
    firstParagraphFirstHalfJs,
    discordLink,
    discordLinkJs,
    firstParagraphSecondHalf,
    firstParagraphSecondHalfJs,
    secondParagraphFirstHalf,
    telegramLink,
    secondParagraphSecondHalf,
    thirdParagraphFirstHalf,
    rsDocsLink,
    thirdParagraphSecondHalf,
    discordNote,
  } = communicationText[lang];

  return (
    <section className={cx('container')}>
      <article className={cx('content', 'communication-content')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>
        <div className={cx('communication-wrapper')}>
          <figure className={cx('discord-logo-wrapper')}>
            <Image src={discordLogo} alt="discord logo" />
          </figure>
          <div>
            {courseName === JS_EN_COURSE
              ? (
                  <>
                    <Subtitle className={cx('communication-subtitle')}>{subTitleJs}</Subtitle>
                    <Paragraph className={cx('communication-paragraph')}>
                      <LinkCustom href={DISCORD_LINKS[courseName]} external>
                        {discordLinkJs}
                      </LinkCustom>
                      {firstParagraphFirstHalfJs}
                    </Paragraph>
                    <Paragraph>
                      <LinkCustom href={JS_EN_TELEGRAM_CHAT_LINK} external>
                        {telegramLink}
                      </LinkCustom>
                      {firstParagraphSecondHalfJs}
                    </Paragraph>
                  </>
                )
              : (
                  <>
                    <Subtitle className={cx('communication-subtitle')}>{subTitle}</Subtitle>
                    <Paragraph>
                      {firstParagraphFirstHalf}
                      <LinkCustom href={DISCORD_LINKS[courseName]} external>
                        {discordLink}
                      </LinkCustom>
                      {firstParagraphSecondHalf}
                    </Paragraph>
                  </>
                )}
            <Paragraph>
              &#9888;&#65039;
              {discordNote}
            </Paragraph>
            <Paragraph>
              {secondParagraphFirstHalf}
              <LinkCustom href={RS_DOCS_TELEGRAM_CHATS_LINK} external>
                {telegramLink}
              </LinkCustom>
              {secondParagraphSecondHalf}
            </Paragraph>
            <Paragraph>
              {thirdParagraphFirstHalf}
              <LinkCustom href={RS_DOCS_COMMUNICATION_LINK} external>
                {rsDocsLink}
              </LinkCustom>
              {thirdParagraphSecondHalf}
            </Paragraph>
          </div>
        </div>
      </article>
    </section>
  );
};
