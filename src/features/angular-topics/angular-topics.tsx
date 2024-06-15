import classNames from 'classnames/bind';
import { Actions, Title } from '@/app/components';

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
        <Title text="Topics Covered:" hasAsterisk />
        <Actions actions={topicsList} marked />
      </article>
    </section>
  );
};
