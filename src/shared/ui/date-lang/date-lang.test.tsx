import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DateLang } from './date-lang';
import micIcon from '@/shared/assets/icons/mic.svg';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { dayJS } from '@/shared/helpers/dayJS';

describe('DateLang', () => {
  it('renders the start date correctly', () => {
    const startDate = '2060-01-01';
    const registrationEndDate = dayJS(startDate).add(1, 'd').toISOString();

    render(
      <DateLang
        startDate={startDate}
        registrationEndDate={registrationEndDate}
        language="en"
        mode=""
      />,
    );
    expect(screen.getByText(`${startDate}`)).toBeInTheDocument();
  });

  it('renders the mode correctly', () => {
    const mode = 'Online';

    render(<DateLang startDate="" registrationEndDate="" language="en" mode={mode} />);
    expect(screen.getByText(`${mode}`)).toBeInTheDocument();
  });

  it('displays the correct note and microphone icons', () => {
    render(<DateLang startDate="" registrationEndDate="" language="en" mode="" />);
    expect(screen.getByAltText('note-icon')).toHaveAttribute('src', noteIcon.src);
    expect(screen.getByRole('img', { name: 'microphone-icon' })).toHaveAttribute(
      'src',
      micIcon.src,
    );
  });
});
