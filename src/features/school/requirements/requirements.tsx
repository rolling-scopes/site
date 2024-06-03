import { LinkCustom } from '@/app/components';
import { LINKS } from '@/app/const';
import { ArrowIcon } from '@/icons';

import './requirements.scss';

export const Requirements = () => {
  return (
    <section className="requirements container">
      <div className="requirements content">
        <div className="requirements-info">
          <div className="requirements-list">
            <div className="title">Requirements for mentors</div>
            <ul className="description">
              <li>
                Desire to help students. If you've been working with JS/TS in production for more
                than 6 months, then that's great.
              </li>
              <li>Desire to mentor 2 to 6 students online or in person</li>
              <li>Ability to spend 3 to 5 hours per week</li>
            </ul>
          </div>
          <div className="responsibilities">
            <div className="title">Mentor responsibilities</div>
            <ul className="description">
              <li>Conducting an interview</li>
              <li>Code review tasks</li>
              <li>Answers to students' questions</li>
            </ul>
          </div>
        </div>
        <LinkCustom
          href={LINKS.BECOME_MENTOR}
          icon={<ArrowIcon />}
          variant="colored"
          button
          target="_blank">
          Register as a mentor
        </LinkCustom>
      </div>
    </section>
  );
};
