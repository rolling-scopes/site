import classNames from 'classnames/bind';
import { ANCHORS } from '@/app/const';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { mentorsRegisterData } from 'data';

import styles from './mentors-register.module.scss';

const cx = classNames.bind(styles);

type MentorsRegisterProps = {
  lang?: 'ru' | 'en';
};

export const MentorsRegister = ({ lang = 'en' }: MentorsRegisterProps) => {
  return (
    <section className={cx('container')} id={ANCHORS.MENTORSHIP_REGISTER}>
      <div className={cx('content', 'mentoring-register')}>
        <WidgetTitle className={cx('title')}>{mentorsRegisterData[lang].header}</WidgetTitle>
        <Subtitle className={cx('note')} fontSize="extra-small">{mentorsRegisterData[lang].note}</Subtitle>
        <div className={cx('step-wrapper')}>
          <List data={mentorsRegisterData[lang].steps} />
        </div>
        <LinkCustom
          href={mentorsRegisterData[lang].button.link}
          variant="primary"
          external={mentorsRegisterData[lang].button.external}
        >
          {mentorsRegisterData[lang].button.text}
        </LinkCustom>
      </div>
    </section>
  );
};
