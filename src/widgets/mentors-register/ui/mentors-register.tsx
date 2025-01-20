import classNames from 'classnames/bind';

// import { ROUTES } from '@/core/const';
import { Language } from '@/shared/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { DocDetail } from '@/widgets/mentors-docs/ui/doc-detail';
import { mentorDocsData, mentorsRegisterData, mentorshipCoursesDefault } from 'data';

import styles from './mentors-register.module.scss';

const cx = classNames.bind(styles);

type MentorsRegisterProps = {
  lang?: Language;
};

export const MentorsRegister = ({ lang = 'en' }: MentorsRegisterProps) => {
  // const { pathname } = useLocation();
  // const isCommonMentorship = pathname === `/${ROUTES.MENTORSHIP}`;
  const isCommonMentorship = true;

  return (
    <section className={cx('container')}>
      <div className={cx('content', 'mentoring-register')}>
        <WidgetTitle>{mentorsRegisterData[lang].header}</WidgetTitle>
        <Subtitle className={cx('note')} fontSize="extra-small">
          {mentorsRegisterData[lang].noteBefore}
        </Subtitle>
        {isCommonMentorship && (
          <DocDetail
            textBeforeLink={mentorDocsData[lang].mentor.textBeforeLink}
            textLink={mentorDocsData[lang].mentor.textLink}
            textAfterLink={`${mentorDocsData[lang].mentor.textAfterLink} ${mentorDocsData[lang].mentor.textAfterCourseName}`}
            linkDocs={mentorshipCoursesDefault.links.mentorDocs}
          />
        )}
        <LinkCustom
          href={mentorsRegisterData[lang].button.link}
          variant="primary"
          external={mentorsRegisterData[lang].button.external}
        >
          {mentorsRegisterData[lang].button.text}
        </LinkCustom>
        <Subtitle className={cx('note', 'header-after')} fontSize="extra-small">
          {mentorsRegisterData[lang].noteAfter}
        </Subtitle>
        <List data={mentorsRegisterData[lang].stepsAfter} />
      </div>
    </section>
  );
};
