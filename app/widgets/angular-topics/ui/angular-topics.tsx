import classNames from 'classnames/bind';
import { topicsList } from '../constants';
import { List } from '@/shared/ui/list';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './angular-topics.module.scss';

const cx = classNames.bind(styles);

export const AngularTopics = () => {
  return (
    <section className={cx('angular-topics', 'container')} data-testid="angular-topics">
      <article className={cx('content', 'angular-topics-content')}>
        <WidgetTitle size="medium" mods="asterisk">Topics Covered:</WidgetTitle>
        <List data={topicsList} />
      </article>
    </section>
  );
};
