import classNames from 'classnames/bind';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';
import { requirementsData } from 'data';

import styles from './requirements.module.scss';

const cx = classNames.bind(styles);

export const Requirements = () => {
  return (
    <section className={cx('container')} data-testid="requirements">
      <div className={cx('content', 'requirements')}>
        <div className={cx('requirements-info')}>
          <article className={cx('requirements-list-wrapper')}>
            <Subtitle fontSize="medium" className={cx('title')}>
              {requirementsData.headerRequirements}
            </Subtitle>
            <List data={requirementsData.requirements} />
          </article>
          <article>
            <Subtitle fontSize="medium" className={cx('title')}>
              {requirementsData.headerTask}
            </Subtitle>
            <List data={requirementsData.tasks} />
          </article>
        </div>
        <LinkCustom
          href={requirementsData.button.href}
          variant="primary"
          external={requirementsData.button.external}
        >
          {requirementsData.button.text}
        </LinkCustom>
      </div>
    </section>
  );
};
