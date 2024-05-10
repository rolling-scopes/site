import { Subtitle, Title } from '@/app/components';
import { DiscordLogo } from '@/icons/discord-logo';
import { CourseNames, RS_DOCS_COMMUNICATION_LINK, discordLinks } from '@/shared/data/communication';

import './communication.scss';

interface RequiredProps {
  courseName: CourseNames;
}

export const Communication = ({ courseName }: RequiredProps) => {
  return (
    <section className="communication container">
      <div className="communication content">
        <Title text="Communication" hasAsterisk />
        <div className="column-2">
          <div className="logo-wrapper">
            <DiscordLogo />
          </div>
          <div>
            <Subtitle text="Discord is the main communication channel in RS School" />
            <p>
              Here is link for the{' '}
              <a href={discordLinks[courseName]} target="_blank">
                course discord
              </a>
            </p>
            <p>
              More info about communication at course in the{' '}
              <a href={RS_DOCS_COMMUNICATION_LINK}>RS Docs</a>. Here you could find rules, links to
              other courses and Telegram channels. Feel free to use that info.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
