import { StaticImageData } from 'next/image';
import { Image } from '@/shared/ui/image';

import './logo-icon.scss';

interface LogoIconProps {
  icon: StaticImageData;
  title: string;
}

export const LogoIcon = ({ icon, title }: LogoIconProps) => {
  return (
    <div className="stage-logo">
      <Image img={icon} alt={title} />
    </div>
  );
};
