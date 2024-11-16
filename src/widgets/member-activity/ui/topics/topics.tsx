import { useContext } from 'react';
import classNames from 'classnames/bind';
import { LangContext } from '../member-activity/member-activity.tsx';

import styles from './topics.module.scss';

const cx = classNames.bind(styles);

type TopicsProps = {
  topics: string[];
};

const localizedContents = {
  en: { topics: 'Topics covered:' },
  ru: { topics: 'Темы:' },
};

export const Topics = ({ topics }: TopicsProps) => {
  const lang = useContext(LangContext);

  return (
    <ul className={cx('stage-topics')}>
      <span className={cx('stage-topics-covered')}>{localizedContents[lang].topics}</span>
      {topics.map((topic, index) => (
        <li key={index}>{topic}</li>
      ))}
    </ul>
  );
};
