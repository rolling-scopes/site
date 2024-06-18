import Image from '@/shared/ui/image';

import './logo-icon.scss';

interface LogoIconProps {
  icon: string;
  title: string;
}

export const LogoIcon = ({ icon, title }: LogoIconProps) => {
  return (
    <div className="stage-logo">
      <Image src={icon} alt={title} />
    </div>
  );
};
