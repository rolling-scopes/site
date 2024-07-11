import { LINKS } from '@/app/const';
import mentorImg from '@/shared/assets/mentors-wanted.webp';
import { ArrowIcon } from '@/shared/icons';
import Image from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './mentors.scss';

export const Mentors = () => {
  return (
    <section className="mentors container" id="mentors-wanted">
      <div className="mentors content column-2">
        <div className="mentors-info">
          <WidgetTitle size="large" mods="lines">
            Mentors wanted!
          </WidgetTitle>
          <Subtitle>
            The Rolling Scopes School is constantly looking for mentors from all over the world to
            teach everyone who wants to learn the JavaScript language and the world of Front-end.
            Over the past few years, over 1500+ people have successfully completed our six month
            training program.
          </Subtitle>
          <LinkCustom
            href={LINKS.BECOME_MENTOR}
            icon={<ArrowIcon />}
            variant="colored"
            button
            target="_blank"
          >
            Become a mentor
          </LinkCustom>
        </div>
        <div className="picture">
          <Image src={mentorImg} alt="Sloth - mascot dressed as a detective" />
        </div>
      </div>
    </section>
  );
};
