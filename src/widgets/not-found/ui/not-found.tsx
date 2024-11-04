import Image from 'next/image';
import notFoundImg from '@/shared/assets/404.webp';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import './not-found.scss';

const NotFound = () => {
  return (
    <main className="not-found">
      <div className="image-wrapper">
        <Image src={notFoundImg} alt="not found" />
      </div>
      <Paragraph className="not-found-paragraph">
        The page you are looking for doesn&apos;t exist or has been moved. Please go back to the
        homepage.
      </Paragraph>
      <LinkCustom href="/" variant="primary">
        Go back home
      </LinkCustom>
    </main>
  );
};

export default NotFound;
