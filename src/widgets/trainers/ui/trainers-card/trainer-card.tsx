import { Image } from '@/shared/ui/image';
import { Trainer } from 'data';

type TrainerProps = Trainer;

export const TrainerCard = ({ name, bio, role, photo }: TrainerProps) => {
  return (
    <div className="trainer-card">
      <div className="picture">
        <Image src={photo} alt={`${name} ${role}`} />
      </div>
      <div className="right">
        <h2 className="card-title">{name}</h2>
        <h3 className="card-subtitle">{role}</h3>
        <p className="card-content">{bio}</p>
      </div>
    </div>
  );
};
