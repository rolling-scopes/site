import { Paragraph, Subtitle, Title } from '@/app/components';
import ExternalLink from '@/app/components/externalLink/external-link';
import { CourseNames, DISCORD_LINKS, RS_DOCS_COMMUNICATION_LINK } from '@/data/communication.data';
import { DiscordLogo } from '@/icons/discord-logo';

import './communication.scss';

interface RequiredProps {
  courseName: CourseNames;
}

export const Communication = ({ courseName }: RequiredProps) => {
  return (
    <section className="communication container">
      <article className="communication content info-wrapper">
        <Title text="Communication" hasAsterisk />
        <div className="column-2">
          <figure className="disclogo-wrapper">
            <DiscordLogo />
          </figure>
          <div>
            <Subtitle text="Discord is the main communication channel in RS School" />
            <Paragraph>
              Here is link for the{' '}
              <ExternalLink href={DISCORD_LINKS[courseName]} text="course discord server" /> where
              you can see latest news and chat with students.
            </Paragraph>
            <Paragraph>
              More info about communication at RS School in the{' '}
              <ExternalLink href={RS_DOCS_COMMUNICATION_LINK} text="RS Docs" /> Here you could find
              rules, links to other courses and Telegram channels related to your country or even
              city. Feel free to use it :)
            </Paragraph>
          </div>
        </div>
      </article>
    </section>
  );
};
