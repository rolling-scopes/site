import { render, screen } from '@testing-library/react';
import { Image } from './image';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

describe('Actions Component', () => {
  it('renders image correctly', () => {
    render(<Image imageSrc={MOCKED_IMAGE_PATH} title={MOCKED_IMAGE_PATH} />);

    expect(screen.getByRole('img', { name: MOCKED_IMAGE_PATH })).toBeInTheDocument();
  });

  it('renders image src and alt attributes correctly', () => {
    render(<Image imageSrc={MOCKED_IMAGE_PATH} title={MOCKED_IMAGE_PATH} />);

    expect(screen.getByRole('img', { name: MOCKED_IMAGE_PATH })).toHaveAttribute(
      'src',
      MOCKED_IMAGE_PATH,
    );

    expect(screen.getByRole('img', { name: MOCKED_IMAGE_PATH })).toHaveAttribute(
      'alt',
      MOCKED_IMAGE_PATH,
    );
  });
});
