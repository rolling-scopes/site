import classNames from 'classnames/bind';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';
import { buttonLink, textContent } from 'data';

import styles from './requirements.module.scss';

const cx = classNames.bind(styles);

export const Requirements = () => {
  return (
    <section className={cx('container')}>
      <div className={cx('content', 'requirements')}>
        <div className={cx('requirements-info')}>
          <article className={cx('requirements-list-wrapper')}>
            <Subtitle fontSize="medium" className={cx('title')}>
              {textContent.headerRequirements}
            </Subtitle>
            <List data={textContent.requirements} />
          </article>
          <article>
            <Subtitle fontSize="medium" className={cx('title')}>
              {textContent.headerTask}
            </Subtitle>
            <List data={textContent.tasks} />
          </article>
        </div>
        <LinkCustom
          href={buttonLink.href}
          variant="primary"
          external={buttonLink.external}
        >
          {textContent.button}
        </LinkCustom>
      </div>
    </section>
  );
};
