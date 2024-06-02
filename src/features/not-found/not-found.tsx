import { Link } from 'react-router-dom';
import { Paragraph } from '@/app/components';
import { useTitle } from '@/app/hooks';
import notFoundImg from '@/assets/404.webp';
import Image from '@/shared/image';

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
      <Link to="/" className="button">
        <span className="label">Go back home</span>
        <span className="material-symbols-outlined arrow">arrow_forward</span>
      </Link>
    </main>
  );
};
