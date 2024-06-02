import { Button, Subtitle, Title, TitleType } from '@/app/components';
import mentorImg from '@/assets/mentors-wanted.webp';
import Image from '@/shared/image';

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
          <Button label="Become a mentor" href="https://app.rs.school/registry/mentor" />
        </div>
        <div className="picture">
          <Image src={mentorImg} alt="Sloth - mascot dressed as a detective" />
        </div>
      </div>
    </section>
  );
};
