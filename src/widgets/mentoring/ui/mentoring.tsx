import { WidgetTitle } from '@/shared/ui/widget-title/widget-title';

import './mentoring.scss';

const mentorshipBenefits = [
  {
    id: 1,
    info: 'Feel the desire to share your experience and knowledge',
  },
  {
    id: 2,
    info: 'Feeling a lack of communication',
  },
  {
    id: 3,
    info: 'You would like to upgrade your soft & hard skills',
  },
  {
    id: 4,
    info: 'Do you want to train acquaintances / friends / colleagues, but you do not have a ready curriculum or you studied at The Rollings Scopes School, and it\'s time for "Teach It Forward"',
  },
  {
    id: 5,
    info: 'Looking for beginner developers to join your company or project',
  },
];

export const Mentoring = () => {
  return (
    <section className="mentoring container">
      <div className="mentoring content">
        <WidgetTitle size="small">Mentoring is for you if you</WidgetTitle>
        <div className="benefits">
          {mentorshipBenefits.map(({ id, info }) => (
            <div key={id} className="benefit">
              {info}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
