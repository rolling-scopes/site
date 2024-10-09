import classNames from 'classnames/bind';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';

import { buttonLink, buttonVariant, textContent } from '@/widgets/requirements/constants.ts';

import styles from './requirements.module.scss';

const cx = classNames.bind(styles);

export const Requirements = () => {
  return (
    <section className={cx('container')}>
      <article className={cx('content')}>
        <div className={cx('requirements-info')}>
          <div className={cx('requirements-list')}>
            <h3 className={cx('title', 'title-margin')}>{textContent.headerRequirements}</h3>
            <List data={textContent.requirements} />
          </div>
          <div>
            <h3 className={cx('title', 'title-margin')}>{textContent.headerTask}</h3>
            <List data={textContent.tasks} />
          </div>
        </div>
        <LinkCustom
          href={buttonLink.href}
          variant={buttonVariant}
          external={buttonLink.external}
        >
          {textContent.button}
        </LinkCustom>
      </article>
    </section>
  );
};
