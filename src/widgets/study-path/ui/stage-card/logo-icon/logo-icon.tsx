import { Image } from '@/shared/ui/image';
import { ImageType } from '@/shared/ui/image/image';

import './logo-icon.scss';

interface LogoIconProps {
  icon: ImageType;
  title: string;
}

export const LogoIcon = ({ icon, title }: LogoIconProps) => {
  return (
    <div className="stage-logo">
      <Image img={icon} alt={title} />
    </div>
  );
};
