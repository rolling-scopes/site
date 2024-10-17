import { ROUTES } from '@/app/const';
import mentorImg from '@/shared/assets/mentors-wanted.webp';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { MentorshipRoute } from 'data';

import './mentors.scss';

type MentorsProps = {
  route?: MentorshipRoute;
  lang?: 'en' | 'ru';
};
const textContent = {
  en: {
    info: 'The Rolling Scopes School is constantly looking for mentors from all over the world to teach everyone who wants to learn the JavaScript language and the world of Front-end. Over the past few years, over 1500+ people have successfully completed our six month training program.',
    button: 'Read more',
  },
  ru: {
    info: 'Школа Rolling Scopes постоянно ищет наставников со всего мира, чтобы обучать всех желающих языку JavaScript и миру Front-end. За последние несколько лет более 1500 человек успешно завершили нашу шестимесячную программу обучения.',
    button: 'Подробнее',
  },
};

export const Mentors = ({ route = `/${ROUTES.MENTORSHIP}`, lang = 'en' }: MentorsProps) => {
  return (
    <section className="mentors container" id="mentors-wanted">
      <div className="mentors content column-2">
        <div className="mentors-info">
          <WidgetTitle size="large" mods="lines">Mentors wanted!</WidgetTitle>
          <Paragraph fontSize="large" className="paragraph">
            {textContent[lang].info}
          </Paragraph>
          <LinkCustom
            href={route}
            variant="primary"
          >
            {textContent[lang].button}
          </LinkCustom>
        </div>
        <div className="picture">
          <Image src={mentorImg} alt="Sloth - mascot dressed as a detective" />
        </div>
      </div>
    </section>
  );
};
