import classNames from 'classnames/bind';
import Image from 'next/image';
import mentorImg from '@/shared/assets/mentor-register.svg';
import { Language } from '@/shared/types';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { DocDetail } from '@/widgets/mentors-docs/ui/doc-detail';
import { mentorDocsData, mentorsRegisterData, mentorshipCoursesDefault } from 'data';

import styles from './mentors-register.module.scss';

const cx = classNames.bind(styles);

type MentorsRegisterProps = {
  lang?: Language;
};

export const MentorsRegister = ({ lang = 'en' }: MentorsRegisterProps) => {
  const isCommonMentorship = true;

  return (
    <section className={cx('container', 'mentoring-register-section')}>
      <article className={cx('content', 'column-2')}>
        <div className={cx('mentoring-register')}>
          <WidgetTitle>{mentorsRegisterData[lang].header}</WidgetTitle>
          <Paragraph>{mentorsRegisterData[lang].noteBefore}</Paragraph>
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
        </div>
        <div className={cx('picture-wrapper')}>
          <Image
            src={mentorImg}
            alt={mentorDocsData[lang].pictureAlt}
            className={cx('picture')}
            loading="lazy"
          />
        </div>
      </article>
    </section>
  );
};
