import { WidgetTitle } from '@/shared/ui/widget-title';

import './about-mentorship.scss';

type AboutMentorshipProps = {
  benefits: string[];
  lang?: 'en' | 'ru';
};

const COUNT_SYMBOLS = 60;
const textContent = {
  en: { header: 'Mentorship is for you if you' },
  ru: { header: 'Быть ментором для вас если вы' },
};

export const AboutMentorship = ({ benefits, lang = 'en' }: AboutMentorshipProps) => {
  return (
    <section className="about-mentorship container">
      <div className="about-mentorship content">
        <WidgetTitle size="small">{textContent[lang].header}</WidgetTitle>
        <ul className="benefits">
          {benefits.map((info, index) => {
            let className = 'benefit' + ((info.length > COUNT_SYMBOLS) ? ' benefit-long' : ' benefit-short');

            return (
              <li key={index} className={className}>
                {info}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
