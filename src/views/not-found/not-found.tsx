import classNames from 'classnames/bind';

import { Section } from '@/shared/types/types';
import { SectionResolver } from '@/widgets/section-resolver';

import styles from './not-found.module.scss';

const cx = classNames.bind(styles);

type NotFoundProps = {
  sections: Section[];
};

export const NotFound = ({ sections }: NotFoundProps) => {
  return (
    <main className={cx('container', 'not-found')}>
      {sections.map((section) => (
        <SectionResolver key={section.id} section={section} />
      ))}
    </main>
  );
};
