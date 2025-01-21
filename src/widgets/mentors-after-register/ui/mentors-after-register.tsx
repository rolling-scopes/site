import classNames from 'classnames/bind';

import { Language } from '@/shared/types';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { mentorsAfterRegisterData } from 'data';

import styles from './mentors-after-register.module.scss';

const cx = classNames.bind(styles);

type MentorsAfterRegisterProps = {
  lang?: Language;
};

type StepAfterRegisterProps = {
  id: string;
  subtitle: string;
  content: string;
};

export const MentorsAfterRegister = ({ lang = 'en' }: MentorsAfterRegisterProps) => {
  const data = mentorsAfterRegisterData;

  return (
    <section className={cx('container')} data-testid="mentors-after-register">
      <div className={cx('content', 'mentors-after-register')}>
        <WidgetTitle mods="asterisk">{data[lang].title}</WidgetTitle>

        <section className={cx('steps')}>
          {data[lang].steps.map((step: StepAfterRegisterProps) => {
            const { id, subtitle, content } = step;

            return (
              <article className={cx('step')} key={step.id} data-testid="after-register-step">
                <Subtitle className={cx('step-subtitle')} fontSize="small" color="black">
                  {`${id}. ${subtitle}`}
                </Subtitle>

                <p className="step-content">{content}</p>
              </article>
            );
          })}
        </section>
      </div>
    </section>
  );
};
