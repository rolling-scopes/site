import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DateLang } from './date-lang';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

describe('DateLang', () => {
  it('renders the start date correctly', () => {
    const startDate = '2022-01-01';

    render(<DateLang startDate={startDate} language={[]} mode="" />);
    expect(screen.getByText(`Start date ${startDate}`)).toBeInTheDocument();
  });

  it('renders the language correctly', () => {
    const language = ['ru', 'en'];
    const expected = 'ru/en';

    render(<DateLang startDate="" language={language} mode="" />);
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it('renders the mode correctly', () => {
    const mode = 'Online';

    render(<DateLang startDate="" language={[]} mode={mode} />);
    expect(screen.getByText(`• ${mode}`)).toBeInTheDocument();
  });

  it('displays the correct note and microphone icons', () => {
    const noteIcon = MOCKED_IMAGE_PATH;
    const micIcon = MOCKED_IMAGE_PATH;

    render(<DateLang startDate="" language={[]} mode="" />);
    expect(screen.getByAltText('note-icon')).toHaveAttribute('src', noteIcon);
    expect(screen.getByRole('img', { name: 'microphone icon' })).toHaveAttribute('src', micIcon);
  });

  it('handles missing start date', () => {
    render(<DateLang startDate="" language={['en']} mode="Online" />);
    expect(screen.getByText('Start date')).toBeInTheDocument();
  });
});
