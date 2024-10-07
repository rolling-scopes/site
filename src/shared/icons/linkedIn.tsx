import linkedIn from '@/shared/assets/svg/linkedIn.svg';
import { Image } from '@/shared/ui/image';

export const LinkedInIcon = () => {
  return (
    <figure className="icon-surface">
      <Image img={linkedIn} alt="linkedIn icon" />
    </figure>
  );
};
