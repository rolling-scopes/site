import { render, screen } from '@testing-library/react';
import { Image } from './image';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

describe('Actions Component', () => {
  it('renders image correctly', () => {
    render(<Image imageSrc={MOCKED_IMAGE_PATH} title={MOCKED_IMAGE_PATH.src} />);

    expect(screen.getByRole('img', { name: MOCKED_IMAGE_PATH.src })).toBeInTheDocument();
  });

  it('renders image src and alt attributes correctly', () => {
    render(<Image imageSrc={MOCKED_IMAGE_PATH} title={MOCKED_IMAGE_PATH.src} />);

    expect(screen.getByRole('img', { name: MOCKED_IMAGE_PATH.src })).toHaveAttribute(
      'src',
      MOCKED_IMAGE_PATH.src,
    );

    expect(screen.getByRole('img', { name: MOCKED_IMAGE_PATH.src })).toHaveAttribute(
      'alt',
      MOCKED_IMAGE_PATH.src,
    );
  });
});
