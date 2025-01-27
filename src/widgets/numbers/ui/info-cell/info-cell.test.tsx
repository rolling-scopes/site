import { render, screen } from '@testing-library/react';

import { InfoCell } from './info-cell';

const title = 'Test Title';
const description = 'Test Description';

describe('InfoCell', () => {
  it('renders the title and description correctly', () => {
    render(<InfoCell title={title} description={description} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
