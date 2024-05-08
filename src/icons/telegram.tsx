import telegram from '@/assets/svg/telegram.svg';
import Image from '@/features/image';

export const TelegramIcon = () => {
  return (
    <div className="icon-surface">
      <Image src={telegram} alt="telegram icon" />
    </div>
  );
};
