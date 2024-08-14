import classNames from 'classnames/bind';
import { List } from '@/shared/ui/list';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './angular-topics.module.scss';

const cx = classNames.bind(styles);

export const AngularTopics = () => {
  const topicsList = [
    'TypeScript',
    'Components',
    'Directives & Pipes',
    'Modules & Services, Dependency Injection',
    'Routing',
    'RxJS & Observables',
    'HTTP',
    'Forms',
    'Redux & NgRx',
    'Unit Testing',
  ];

  return (
    <section className={cx('angular-topics', 'container')}>
      <article className={cx('content', 'angular-topics-content')}>
        <WidgetTitle size="medium" mods="asterisk">Topics Covered:</WidgetTitle>
        <List data={topicsList} />
      </article>
    </section>
  );
};
