import classNames from 'classnames/bind';
import Image from 'next/image';

import discordLogo from '@/shared/assets/svg/discord-logo.svg';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import {
  COURSE_TITLES,
  CourseNamesKeys,
  DISCORD_LINKS,
  JS_EN_TELEGRAM_CHAT_LINK,
  RS_DOCS_COMMUNICATION_LINK,
  RS_DOCS_EN_LINK,
  RS_DOCS_TELEGRAM_CHATS_LINK,
  communicationText,
} from 'data';

import styles from './communication.module.scss';

const cx = classNames.bind(styles);

type CommunicationProps = {
  courseName: CourseNamesKeys;
};

export const Communication = async ({ courseName }: CommunicationProps) => {
  const course = await selectCourse(courseName);
  const { language } = course;
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
  } = communicationText[language];

  const isJsEnCourse = courseName === COURSE_TITLES.JS_EN;
  const courseSubTitle = isJsEnCourse ? subTitleJs : subTitle;
  const paragraphClassName = isJsEnCourse ? cx('communication-paragraph') : undefined;
  const courseDiscordLink = isJsEnCourse ? discordLinkJs : discordLink;
  const discordFirstHalfText = !isJsEnCourse ? firstParagraphFirstHalf : null;
  const discordSecondHalfText = isJsEnCourse ? discordParagraphTextJs : firstParagraphSecondHalf;
  const rsDocsHref = isJsEnCourse ? RS_DOCS_EN_LINK : RS_DOCS_COMMUNICATION_LINK;

  return (
    <section className={cx('container')}>
      <article className={cx('content', 'communication-content')}>
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>
        <div className={cx('communication-wrapper')}>
          <figure className={cx('discord-logo-wrapper')}>
            <Image src={discordLogo} alt="discord logo" />
          </figure>
          <div>
            <Subtitle className={cx('communication-subtitle')}>{courseSubTitle}</Subtitle>
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
              <LinkCustom href={rsDocsHref} external>
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
