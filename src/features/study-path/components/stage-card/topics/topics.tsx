import { useContext } from 'react';
import { LangContext } from '@/features/study-path/study-path';

import './topics.scss';

interface TopicsProps {
  topics: string[];
}

const localizedContents = {
  en: { topics: 'Topics covered:' },
  ru: { topics: 'Темы:' },
};

export const Topics = ({ topics }: TopicsProps) => {
  const lang = useContext(LangContext);

  return (
    <ul className="stage-topics">
      <span className="stage-topics-covered">{localizedContents[lang].topics}</span>
      {topics.map((topic, index) => (
        <li key={index}>{topic}</li>
      ))}
    </ul>
  );
};
