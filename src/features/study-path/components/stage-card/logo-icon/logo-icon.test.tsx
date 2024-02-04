import { render, screen } from '@testing-library/react';
import { LogoIcon } from './logo-icon';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

describe('LogoIcon Component', () => {
  it('renders logo image with correct src and alt text', () => {
    const testTitle = 'Test Icon';

    render(<LogoIcon icon={MOCKED_IMAGE_PATH} title={testTitle} />);

    const imgElement = screen.getByAltText(testTitle);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});
