import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DateSimple } from './date-simple';
import { COURSE_DATE_FORMAT } from '@/entities/course/constants';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { LABELS, TO_BE_DETERMINED } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/day-js';

describe('DateSimple', () => {
  it('renders UI correctly having only start date', () => {
    const startDate = dayJS('2088-01-01').format(COURSE_DATE_FORMAT);
    const showMentoringStartDate = false;

    render(<DateSimple startDate={startDate} showMentoringStartDate={showMentoringStartDate} />);
    expect(screen.queryByText(LABELS.START_DATE)).toBeNull();
    expect(screen.getByText(`${startDate}`)).toBeInTheDocument();
    expect(screen.queryByAltText('note-icon')).toBeNull();
  });

  it('renders label, start/end dates, icon and separator correctly', () => {
    const label = 'Dates:';
    const startDate = dayJS('2088-01-01').format(COURSE_DATE_FORMAT);
    const endDate = dayJS('2088-06-30').format(COURSE_DATE_FORMAT);
    const labelSeparator = 'test-separator';
    const showMentoringStartDate = true;

    render(
      <DateSimple
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
    const startDate = dayJS('2088-01-01').format(COURSE_DATE_FORMAT);
    const endDate = TO_BE_DETERMINED;
    const showMentoringStartDate = true;

    render(
      <DateSimple
        startDate={startDate}
        endDate={endDate}
        showMentoringStartDate={showMentoringStartDate}
      />,
    );
    const startDateElement = screen.getByTestId('date-time-start');
    const endDateElement = screen.getByTestId('date-time-end');

    expect(startDateElement).toHaveTextContent(startDate);
    expect(startDateElement).toHaveAttribute('datetime', dayJS(startDate).toISOString());
    expect(endDateElement).toHaveTextContent(endDate);
    expect(endDateElement).not.toHaveAttribute('datetime');
  });

  it('displays dates and date attributes correctly when start and end dates are TBD', () => {
    const startDate = TO_BE_DETERMINED;
    const endDate = TO_BE_DETERMINED;
    const showMentoringStartDate = true;

    render(
      <DateSimple
        label={LABELS.START_DATE}
        startDate={startDate}
        labelSeparator={LABELS.MENTOR_ACTIVITIES_SEPARATOR}
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
    const startDate = dayJS('2088-01-01').format(COURSE_DATE_FORMAT);
    const labelSeparator = 'test-separator';
    const showMentoringStartDate = true;

    render(
      <DateSimple
        label={LABELS.START_DATE}
        startDate={startDate}
        labelSeparator={labelSeparator}
        showMentoringStartDate={showMentoringStartDate}
      />,
    );
    const labelSeparatorElement = screen.queryByText(`${labelSeparator}`);

    expect(labelSeparatorElement).toBeNull();
  });

  it('displays start date and additional info passed as children', () => {
    const startDate = dayJS('2088-01-01').format(COURSE_DATE_FORMAT);
    const additionalInfoText = 'Test additional info element';
    const showMentoringStartDate = true;

    render(
      <DateSimple startDate={startDate} showMentoringStartDate={showMentoringStartDate}>
        <span>{additionalInfoText}</span>
      </DateSimple>,
    );

    expect(screen.getByTestId('date-time-start')).toHaveTextContent(startDate);
    expect(screen.getByText(`${additionalInfoText}`)).toBeInTheDocument();
  });
});
