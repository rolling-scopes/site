import telegram from '@/assets/svg/telegram.svg';
import Image from '@/shared/image';

export const TelegramIcon = () => {
  return (
    <figure className="icon-surface">
      <Image src={telegram} alt="telegram icon" />
    </figure>
  );
};
