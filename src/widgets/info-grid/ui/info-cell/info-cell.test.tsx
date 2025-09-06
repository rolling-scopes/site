import { render, screen } from '@testing-library/react';

import { InfoCell } from './info-cell';

const title = 'Test Title';
const description = 'Test Description';

describe('InfoCell', () => {
  it('renders the title and description correctly', () => {
    render(<InfoCell title={title} description={description} />);

    const [firstPart, secondPart] = title.split(' ');

    expect(screen.getByText(new RegExp(`${firstPart}\\s*${secondPart}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
