import { Button, Subtitle, Title, TitleType } from '@/shared/components';
import './Mentors.scss';
import mentorImg from '@/assets/mentors-wanted.png';

export const Mentors = () => {
  return (
    <section className="mentors container">
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
          <img src={mentorImg} alt="Become a mentor" />
        </div>
      </div>
    </section>
  );
};
