import { LINKS } from '@/app/const';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';

import './requirements.scss';

const mentorRequirements = [
  "Desire to help students. If you've been working with JS/TS in production for more than 6 months, then that's great",
  'Desire to mentor 2 to 6 students online or in person',
  'Ability to spend 3 to 5 hours per week',
];

const mentorResponsibilities = [
  'Conducting an interview',
  'Code review tasks',
  "Answers to students' questions",
];

export const Requirements = () => {
  return (
    <section className="requirements container">
      <div className="requirements content">
        <div className="requirements-info">
          <div className="requirements-list">
            <div className="title">Requirements for mentors</div>
            <List data={mentorRequirements} />
          </div>
          <div className="responsibilities">
            <div className="title">Mentor responsibilities</div>
            <List data={mentorResponsibilities} />
          </div>
        </div>
        <LinkCustom
          href={LINKS.BECOME_MENTOR}
          variant="primary"
          external
        >
          Register as a mentor
        </LinkCustom>
      </div>
    </section>
  );
};
