import { LinkCustom, Paragraph } from '@/app/components';
import { useTitle } from '@/app/hooks';
import notFoundImg from '@/assets/404.webp';
import Image from '@/features/image';

import './not-found.scss';

export const NotFound = () => {
  useTitle('404 Not Found');

  return (
    <main className="not-found">
      <div className="image-wrapper">
        <Image src={notFoundImg} alt="not found" lazy="false" />
      </div>
      <Paragraph>
        The page you are looking for doesn't exist or has been moved. Please go back to the
        homepage.
      </Paragraph>
      <LinkCustom href="/" button={true}>
        Go back home
      </LinkCustom>
    </main>
  );
};
