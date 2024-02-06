import './topics.scss';

interface TopicsProps {
  topics: string[];
}

export const Topics = ({ topics }: TopicsProps) => {
  return (
    <ul className="stage-topics">
      <span className="stage-topics-covered">Topics covered:</span>
      {topics.map((topic, index) => (
        <li key={index}>{topic}</li>
      ))}
    </ul>
  );
};
