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
    discordParagraphTextJs,
    discordLink,
    discordLinkJs,
    firstParagraphSecondHalf,
    telegramParagraphTextJs,
    secondParagraphFirstHalf,
    telegramLink,
    secondParagraphSecondHalf,
    thirdParagraphFirstHalf,
    rsDocsLink,
    thirdParagraphSecondHalf,
    discordNote,
  } = communicationText[lang];

  const isJsEnCourse = courseName === 'js / front-end en';
  const courseSubTitle = isJsEnCourse ? subTitleJs : subTitle;
  const paragraphClassName = isJsEnCourse ? cx('communication-paragraph') : undefined;
  const courseDiscordLink = isJsEnCourse ? discordLinkJs : discordLink;
  const discordFirstHalfText = !isJsEnCourse ? firstParagraphFirstHalf : null;
  const discordSecondHalfText = isJsEnCourse ? discordParagraphTextJs : firstParagraphSecondHalf;

  return (
    <section className={cx('container')}>
      <article className={cx('content', 'communication-content')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>
        <div className={cx('communication-wrapper')}>
          <figure className={cx('discord-logo-wrapper')}>
            <Image src={discordLogo} alt="discord logo" />
          </figure>
          <div>
            <Subtitle className={cx('communication-subtitle')}>
              {courseSubTitle}
            </Subtitle>
            <Paragraph className={paragraphClassName}>
              {discordFirstHalfText}
              <LinkCustom href={DISCORD_LINKS[courseName]} external data-testid="discord-link">
                {courseDiscordLink}
              </LinkCustom>
              {discordSecondHalfText}
            </Paragraph>
            {isJsEnCourse && (
              <Paragraph>
                <LinkCustom href={JS_EN_TELEGRAM_CHAT_LINK} external>
                  {telegramLink}
                </LinkCustom>
                {telegramParagraphTextJs}
              </Paragraph>
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
