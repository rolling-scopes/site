import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DateSimple } from './date-simple';
import { COURSE_DATE_FORMAT } from '@/entities/course/constants';
import noteIcon from '@/shared/assets/svg/note-icon.svg';
import { LABELS, TO_BE_DETERMINED } from '@/shared/constants';
import dayjs from '@/shared/helpers/day-js';

describe('DateSimple', () => {
  it('renders UI correctly having only start date', () => {
    const startDate = dayjs('2088-01-01').format(COURSE_DATE_FORMAT);
    const showMentoringStartDate = false;

    render(<DateSimple startDate={startDate} showMentoringStartDate={showMentoringStartDate} lang="en-US" />);
    expect(screen.queryByText(LABELS['en-US'].START_DATE)).toBeNull();
    expect(screen.getByText(`${startDate}`)).toBeInTheDocument();
    expect(screen.queryByAltText('note-icon')).toBeNull();
  });

  it('renders label, start/end dates, icon and separator correctly', () => {
    const label = 'Dates:';
    const startDate = dayjs('2088-01-01').format(COURSE_DATE_FORMAT);
    const endDate = dayjs('2088-06-30').format(COURSE_DATE_FORMAT);
    const labelSeparator = 'test-separator';
    const showMentoringStartDate = true;

    render(
      <DateSimple
        lang="en-US"
        label={label}
        startDate={startDate}
        endDate={endDate}
        labelSeparator={labelSeparator}
        showMentoringStartDate={showMentoringStartDate}
      />,
    );
    expect(screen.getByAltText('note-icon')).toHaveAttribute('src', noteIcon.src);
    expect(screen.getByText(`${label}`)).toBeInTheDocument();
    expect(screen.getByTestId('date-time-start')).toHaveTextContent(startDate);
    expect(screen.getByTestId('date-time-end')).toHaveTextContent(endDate);
    expect(screen.getByText(`${labelSeparator}`)).toBeInTheDocument();
  });

  it('displays dates and date attributes correctly including endDate TBD case', () => {
    const startDate = dayjs('2088-01-01').format(COURSE_DATE_FORMAT);
    const endDate = TO_BE_DETERMINED;
    const showMentoringStartDate = true;

    render(
      <DateSimple
        lang="en-US"
        startDate={startDate}
        endDate={endDate}
        showMentoringStartDate={showMentoringStartDate}
      />,
    );
    const startDateElement = screen.getByTestId('date-time-start');
    const endDateElement = screen.getByTestId('date-time-end');

    expect(startDateElement).toHaveTextContent(startDate);
    expect(startDateElement).toHaveAttribute('datetime', dayjs(startDate).toISOString());
    expect(endDateElement).toHaveTextContent(endDate);
    expect(endDateElement).not.toHaveAttribute('datetime');
  });

  it('displays dates and date attributes correctly when start and end dates are TBD', () => {
    const startDate = TO_BE_DETERMINED;
    const endDate = TO_BE_DETERMINED;
    const showMentoringStartDate = true;

    render(
      <DateSimple
        lang="en-US"
        label={LABELS['en-US'].START_DATE}
        startDate={startDate}
        labelSeparator={LABELS['en-US'].MENTOR_ACTIVITIES_SEPARATOR}
        endDate={endDate}
        showMentoringStartDate={showMentoringStartDate}
      />,
    );
    const startDateElement = screen.getByTestId('date-time-start');
    const endDateElement = screen.getByTestId('date-time-end');

    expect(startDateElement).toHaveTextContent(startDate);
    expect(startDateElement).not.toHaveAttribute('datetime');
    expect(startDateElement).toHaveTextContent(TO_BE_DETERMINED);
    expect(endDateElement).toHaveTextContent(endDate);
    expect(endDateElement).not.toHaveAttribute('datetime');
    expect(endDateElement).toHaveTextContent(TO_BE_DETERMINED);
  });

  it('displays correctly when endDate is undefined but label separator not', () => {
    const startDate = dayjs('2088-01-01').format(COURSE_DATE_FORMAT);
    const labelSeparator = 'test-separator';
    const showMentoringStartDate = true;

    render(
      <DateSimple
        lang="en-US"
        label={LABELS['en-US'].START_DATE}
        startDate={startDate}
        labelSeparator={labelSeparator}
        showMentoringStartDate={showMentoringStartDate}
      />,
    );
    const labelSeparatorElement = screen.queryByText(`${labelSeparator}`);

    expect(labelSeparatorElement).toBeNull();
  });

  it('displays start date and additional info passed as children', () => {
    const startDate = dayjs('2088-01-01').format(COURSE_DATE_FORMAT);
    const additionalInfoText = 'Test additional info element';
    const showMentoringStartDate = true;

    render(
      <DateSimple lang="en-US" startDate={startDate} showMentoringStartDate={showMentoringStartDate}>
        <span>{additionalInfoText}</span>
      </DateSimple>,
    );

    expect(screen.getByTestId('date-time-start')).toHaveTextContent(startDate);
    expect(screen.getByText(`${additionalInfoText}`)).toBeInTheDocument();
  });
});
