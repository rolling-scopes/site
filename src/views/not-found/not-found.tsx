import classNames from 'classnames/bind';
import Image from 'next/image';
import notFoundImg from '@/shared/assets/404.webp';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './not-found.module.scss';

const cx = classNames.bind(styles);

export const NotFound = () => {
  return (
    <main className={cx('container', 'not-found')}>
      <Image
        className={cx('not-found-image')}
        src={notFoundImg}
        alt="Sloth mascot in an RS-branded T-shirt sits on a chair, looking puzzled, symbolizing that the page was not found"
      />
      <Paragraph className={cx('not-found-paragraph')}>
        The page you are looking for doesn&apos;t exist or has been moved. Please go back to the
        homepage.
      </Paragraph>
      <LinkCustom href="/" variant="primary">
        Go back home
      </LinkCustom>
    </main>
  );
};
