import Image, { StaticImageData } from 'next/image';

import './logo-icon.scss';

interface LogoIconProps {
  icon: StaticImageData;
  title: string;
}

export const LogoIcon = ({ icon, title }: LogoIconProps) => {
  return (
    <div className="stage-logo">
      <Image src={icon} alt={title} />
    </div>
  );
};
