import classNames from 'classnames/bind';
import { Language } from '@/shared/types.ts';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { mentorsRegisterData } from 'data';

import styles from './mentors-register.module.scss';

const cx = classNames.bind(styles);

type MentorsRegisterProps = {
  lang?: Language;
};

export const MentorsRegister = ({ lang = 'en' }: MentorsRegisterProps) => {
  return (
    <section className={cx('container')}>
      <div className={cx('content', 'mentoring-register')}>
        <WidgetTitle>{mentorsRegisterData[lang].header}</WidgetTitle>
        <Subtitle className={cx('note')} fontSize="extra-small">{mentorsRegisterData[lang].noteBefore}</Subtitle>
        <List data={mentorsRegisterData[lang].stepsBefore} className={cx('step-before-wrapper')} />
        <LinkCustom
          href={mentorsRegisterData[lang].button.link}
          variant="primary"
          external={mentorsRegisterData[lang].button.external}
        >
          {mentorsRegisterData[lang].button.text}
        </LinkCustom>
        <Subtitle className={cx('note', 'header-after')} fontSize="extra-small">{mentorsRegisterData[lang].noteAfter}</Subtitle>
        <List data={mentorsRegisterData[lang].stepsAfter} />
      </div>
    </section>
  );
};