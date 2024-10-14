import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DateLang } from './date-lang';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

describe('DateLang', () => {
  it('renders the start date correctly', () => {
    const startDate = '2060-01-01';

    render(<DateLang startDate={startDate} language={[]} mode="" />);
    expect(screen.getByText(`${startDate}`)).toBeInTheDocument();
  });

  it('renders the mode correctly', () => {
    const mode = 'Online';

    render(<DateLang startDate="" language={[]} mode={mode} />);
    expect(screen.getByText(`${mode}`)).toBeInTheDocument();
  });

  it('displays the correct note and microphone icons', () => {
    const noteIcon = MOCKED_IMAGE_PATH;
    const micIcon = MOCKED_IMAGE_PATH;

    render(<DateLang startDate="" language={[]} mode="" />);
    expect(screen.getByAltText('note-icon')).toHaveAttribute('src', noteIcon);
    expect(screen.getByRole('img', { name: 'microphone-icon' })).toHaveAttribute('src', micIcon);
  });
});
