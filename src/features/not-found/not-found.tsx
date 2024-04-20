import { Button, Paragraph } from '@/app/components';
import { useTitle } from '@/app/hooks';
import notFoundImg from '@/assets/404.webp';

import './not-found.scss';

export const NotFound = () => {
  useTitle('404 Not Found');

  return (
    <main className="not-found">
      <div className="image-wrapper">
        <img src={notFoundImg} alt="not found" />
      </div>
      <Paragraph>
        The page you are looking for doesn't exist or has been moved. Please go back to the
        homepage.
      </Paragraph>
      <Button label="Go back home" href="/" />
    </main>
  );
};
