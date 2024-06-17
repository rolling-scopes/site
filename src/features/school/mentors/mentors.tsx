import { LINKS } from '@/app/const';
import Image from '@/features/image';
import { ArrowIcon } from '@/icons';
import mentorImg from '@/shared/assets/mentors-wanted.webp';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Subtitle } from '@/shared/ui/subtitle';
import { Title, TitleType } from '@/shared/ui/title';

import './mentors.scss';

export const Mentors = () => {
  return (
    <section className="mentors container" id="mentors-wanted">
      <div className="mentors content column-2">
        <div className="mentors-info">
          <Title text="Mentors wanted!" hasLines type={TitleType.Big} />
          <Subtitle
            text="The Rolling Scopes School is constantly looking for mentors from all over the world to
            teach everyone who wants to learn the JavaScript language and the world of Front-end.
            Over the past few years, over 1500+ people have successfully completed our six month
            training program."
          />
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
