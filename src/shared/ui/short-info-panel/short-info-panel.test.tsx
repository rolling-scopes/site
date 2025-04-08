import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ShortInfoPanel } from './short-info-panel';
import micIcon from '@/shared/assets/icons/mic.svg';
import { LABELS } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';

describe('CourseShortInfo', () => {
  it('renders normalView with correct labels, dates, language, and microphone icon', () => {
    const startDate = '2060-01-01';
    const registrationEndDate = dayJS(startDate).add(1, 'd').toISOString();
    const language = 'en';

    render(
      <ShortInfoPanel
        startDate={startDate}
        registrationEndDate={registrationEndDate}
        language={language}
        label={LABELS.START_DATE}
      />,
    );

    expect(screen.getByText(`${startDate}`)).toBeInTheDocument();
    expect(screen.getByText(`${registrationEndDate}`)).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'microphone-icon' })).toHaveAttribute(
      'src',
      micIcon.src,
    );
  });

  it('renders CompactView with correct date and language', () => {
    const startDate = '2060-01-01';
    const registrationEndDate = dayJS(startDate).add(1, 'd').toISOString();
    const language = 'en';

    render(
      <ShortInfoPanel
        startDate={startDate}
        registrationEndDate={registrationEndDate}
        language={language}
        isCompactView={true}
      />,
    );

    expect(screen.getByText(`${startDate}`)).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });
});
