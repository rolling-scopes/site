import Image from 'next/image';
import telegram from '@/shared/assets/svg/telegram.svg';

export const TelegramIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={telegram} alt="telegram icon" />
    </figure>
  );
};
