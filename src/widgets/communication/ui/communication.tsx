import { communicationSectionLocales } from './locales';
import { DiscordLogo } from '@/shared/icons/discord-logo';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import {
  CourseNamesChannels,
  DISCORD_LINKS,
  RS_DOCS_COMMUNICATION_LINK,
  RS_DOCS_TELEGRAM_CHATS_LINK,
} from 'data';

import './communication.scss';

type CommunicationProps = {
  courseName: CourseNamesChannels;
  lang?: 'ru' | 'en';
};

export const Communication = ({ courseName, lang = 'en' }: CommunicationProps) => {
  return (
    <section className="communication container">
      <article className="communication content info-wrapper">
        <WidgetTitle mods="asterisk">{communicationSectionLocales[lang].title}</WidgetTitle>
        <div className="column-2">
          <figure className="disclogo-wrapper">
            <DiscordLogo />
          </figure>
          <div>
            <Subtitle>{communicationSectionLocales[lang].subTitle}</Subtitle>
            <Paragraph className="communication-paragraph">
              {communicationSectionLocales[lang].firstParagraphFirstHalf}
              {' '}
              <LinkCustom href={DISCORD_LINKS[courseName]} external>
                {communicationSectionLocales[lang].discordLink}
              </LinkCustom>
              {communicationSectionLocales[lang].firstParagraphSecondHalf}
            </Paragraph>
            <Paragraph className="communication-paragraph">
              {communicationSectionLocales[lang].secondParagraphFirstHalf}
              {' '}
              <LinkCustom
                href={RS_DOCS_TELEGRAM_CHATS_LINK}
                external
              >
                {communicationSectionLocales[lang].telegramLink}
              </LinkCustom>
              {communicationSectionLocales[lang].secondParagraphSecondHalf}
            </Paragraph>
            <Paragraph className="communication-paragraph">
              {communicationSectionLocales[lang].thirdParagraphFirstHalf}
              {' '}
              <LinkCustom href={RS_DOCS_COMMUNICATION_LINK} external>
                {communicationSectionLocales[lang].rsDocsLink}
              </LinkCustom>
              {communicationSectionLocales[lang].thirdParagraphSecondHalf}
            </Paragraph>
          </div>
        </div>
      </article>
    </section>
  );
};
