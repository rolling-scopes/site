import { Title } from '../../../../components';
import { MentorCard } from '../../../../components/MentorCard';
import { mentors } from './mockData';
import './Mentors.scss';

export const Mentors = () => {
  return (
    <div className="container">
      <div className="content">
        <Title text="Our mentors and trainers" hasLines />
        <div className="mentors">
          {mentors.map(({ imageSrc, name, position, description }) => (
            <div key={name} className="mentorsItem">
              <MentorCard
                imageSrc={imageSrc}
                name={name}
                position={position}
                description={description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
