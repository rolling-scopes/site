import telegram from '@/shared/assets/svg/telegram.svg';
import { Image } from '@/shared/ui/image';

export const TelegramIcon = () => {
  return (
    <figure className="icon-surface">
      <Image img={telegram} alt="telegram icon" />
    </figure>
  );
};
