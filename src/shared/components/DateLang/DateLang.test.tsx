import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DateLang } from './DateLang';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

describe('DateLang', () => {
  it('renders the start date correctly', () => {
    const startDate = '2022-01-01';
    render(<DateLang startDate={startDate} language="" mode="" />);
    expect(screen.getByText(`Start date ${startDate}`)).toBeInTheDocument();
  });

  it('renders the language correctly', () => {
    const language = 'English';
    render(<DateLang startDate="" language={language} mode="" />);
    expect(screen.getByText(language)).toBeInTheDocument();
  });

  it('renders the mode correctly', () => {
    const mode = 'Online';
    render(<DateLang startDate="" language="" mode={mode} />);
    expect(screen.getByText(`• ${mode}`)).toBeInTheDocument();
  });

  it('displays the correct note and microphone icons', () => {
    const noteIcon = MOCKED_IMAGE_PATH;
    const micIcon = MOCKED_IMAGE_PATH;
    render(<DateLang startDate="" language="" mode="" />);
    expect(screen.getByAltText('note-icon')).toHaveAttribute('src', noteIcon);
    expect(screen.getByRole('img', { name: '' })).toHaveAttribute('src', micIcon);
  });

  it('handles missing start date', () => {
    render(<DateLang startDate="" language="English" mode="Online" />);
    expect(screen.getByText('Start date')).toBeInTheDocument();
  });
});
