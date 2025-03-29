import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ShortInfoPanel } from './short-info-panel';
import micIcon from '@/shared/assets/icons/mic.svg';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { LABELS } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';

describe('CourseShortInfo', () => {
  it('renders the start date correctly', () => {
    const startDate = '2060-01-01';
    const registrationEndDate = dayJS(startDate).add(1, 'd').toISOString();

    render(
      <ShortInfoPanel
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

    render(<ShortInfoPanel startDate="" registrationEndDate="" language="en" mode={mode} />);
    expect(screen.getByText(`${mode}`)).toBeInTheDocument();
  });

  it('displays the correct note and microphone icons', () => {
    render(
      <ShortInfoPanel
        label={LABELS.START_DATE}
        startDate=""
        registrationEndDate=""
        language="en"
        mode=""
      />,
    );
    const images = screen.getAllByAltText('note-icon');

    images.forEach((img) => {
      expect(img).toHaveAttribute('src', noteIcon.src);
    });

    expect(screen.getByRole('img', { name: 'microphone-icon' })).toHaveAttribute(
      'src',
      micIcon.src,
    );
  });

  it('renders oneliner mode correctly having date and language', () => {
    const startDate = '2060-01-01';
    const registrationEndDate = dayJS(startDate).add(1, 'd').toISOString();
    const language = 'en';

    render(
      <ShortInfoPanel
        startDate={startDate}
        registrationEndDate={registrationEndDate}
        language={language}
        onlyLanguage={true}
      />,
    );

    const languages = screen.getAllByText(`${language}`);

    languages.forEach((language) => {
      expect(language).toBeInTheDocument();
    });
    const dates = screen.getAllByText(`${startDate}`);

    dates.forEach((date) => {
      expect(date).toBeInTheDocument();
    });

    const labels = screen.getAllByText(`${LABELS.SHORT_INFO_SEPARATOR}`);

    labels.forEach((label) => {
      expect(label).toBeInTheDocument();
    });
  });
});
