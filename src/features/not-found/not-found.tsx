import Image from '@/features/image';
import notFoundImg from '@/shared/assets/404.webp';
import { useTitle } from '@/shared/hooks/use-title';
import { ArrowIcon } from '@/shared/icons';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import './not-found.scss';

export const NotFound = () => {
  useTitle('404 Not Found');

  return (
    <main className="not-found">
      <div className="image-wrapper">
        <Image src={notFoundImg} alt="not found" lazy="false" />
      </div>
      <Paragraph>
        The page you are looking for doesn&apos;t exist or has been moved. Please go back to the
        homepage.
      </Paragraph>
      <LinkCustom href="/" icon={<ArrowIcon />} variant="colored" button>
        Go back home
      </LinkCustom>
    </main>
  );
};
