import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ShortInfoPanel } from './short-info-panel';
import { COURSE_DATE_FORMAT, MENTORING_DATE_FORMAT } from '@/entities/course/constants';
import micIcon from '@/shared/assets/svg/mic.svg';
import { LABELS } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/day-js';
import { CourseLanguage } from '@/shared/types/types';

describe('CourseShortInfo', () => {
  const data = {
    startDate: dayJS('2060-01-01').format(COURSE_DATE_FORMAT),
    registrationEndDate: dayJS('2060-01-01').add(1, 'd').format(COURSE_DATE_FORMAT),
    language: new Set(['en']) as CourseLanguage,
  };

  it('renders normal course card view with correct labels, dates, language, and microphone icon', () => {
    render(
      <ShortInfoPanel
        startDate={data.startDate}
        registrationEndDate={data.registrationEndDate}
        language={data.language}
        label={LABELS.START_DATE}
      />,
    );

    expect(screen.getByText(`${data.startDate}`)).toBeInTheDocument();
    expect(screen.getByText(`${data.registrationEndDate}`)).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'microphone-icon' })).toHaveAttribute(
      'src',
      micIcon.src,
    );
  });

  it('renders upcoming course card view with correct date and language', () => {
    render(
      <ShortInfoPanel
        startDate={data.startDate}
        registrationEndDate={data.registrationEndDate}
        language={data.language}
      />,
    );

    expect(screen.getByText(data.registrationEndDate)).toBeInTheDocument();
    expect(screen.getByText(data.registrationEndDate)).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('renders mentoring course card view with correct labels, dates, language, and microphone icon', () => {
    const personalMentoringStartDate = dayJS('2060-02-01').format(MENTORING_DATE_FORMAT);
    const personalMentoringEndDate = dayJS('2060-03-15').format(MENTORING_DATE_FORMAT);
    const language = new Set(['en'] as const);

    render(
      <ShortInfoPanel
        startDate={null}
        registrationEndDate={null}
        language={language}
        showMentoringStartDate
        personalMentoringStartDate={personalMentoringStartDate}
        personalMentoringEndDate={personalMentoringEndDate}
      />,
    );

    expect(screen.getByText(personalMentoringStartDate)).toBeInTheDocument();
    expect(screen.getByText(personalMentoringEndDate)).toBeInTheDocument();
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'microphone-icon' })).toHaveAttribute(
      'src',
      micIcon.src,
    );
  });
});
