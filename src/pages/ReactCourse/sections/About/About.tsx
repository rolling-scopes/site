import { Title } from '../../../../components';
import { InfoCard } from '../../../../components/InfoCard';
import { cards } from './mockData';
import './About.scss';

export const About = () => {
  return (
    <div className="rs-about container">
      <div className="rs-about content">
        <Title text="About" />
        <div className="card-wrapper">
          {cards.map(({ icon, title, text, classNames }) => (
            <InfoCard key={title} icon={icon} title={title} text={text} classNames={classNames} />
          ))}
        </div>
      </div>
    </div>
  );
};
