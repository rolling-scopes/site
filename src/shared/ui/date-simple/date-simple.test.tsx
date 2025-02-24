import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { DateSimple } from './date-simple';
import noteIcon from '@/shared/assets/icons/note-icon.svg';
import { LABELS, TO_BE_DETERMINED } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';

describe('DateSimple', () => {
  it('renders UI correctly having only start date', () => {
    const startDate = '2088-01-01';

    render(<DateSimple startDate={startDate} />);
    expect(screen.queryByText(LABELS.START_DATE)).toBeNull();
    expect(screen.getByText(`${startDate}`)).toBeInTheDocument();
    expect(screen.queryByAltText('note-icon')).toBeNull();
  });

  it('renders label, start/end dates, icon and separator correctly', () => {
    const label = 'Dates:';
    const startDate = '2088-01-01';
    const endDate = '2088-06-30';
    const labelSeparator = 'test-separator';

    render(
      <DateSimple
        label={label}
        startDate={startDate}
        endDate={endDate}
        labelSeparator={labelSeparator}
      />,
    );
    expect(screen.getByAltText('note-icon')).toHaveAttribute('src', noteIcon.src);
    expect(screen.getByText(`${label}`)).toBeInTheDocument();
    expect(screen.getByTestId('date-time-start')).toHaveTextContent(startDate);
    expect(screen.getByTestId('date-time-end')).toHaveTextContent(endDate);
    expect(screen.getByText(`${labelSeparator}`)).toBeInTheDocument();
  });

  it('displays dates and date attributes correctly including endDate TBD case', () => {
    const startDate = '2088-01-01';
    const endDate = TO_BE_DETERMINED;

    render(<DateSimple startDate={startDate} endDate={endDate} />);
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

    render(
      <DateSimple
        label={LABELS.START_DATE}
        startDate={startDate}
        labelSeparator={LABELS.MENTORING_DATES_SEPARATOR}
        endDate={endDate}
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
    const startDate = '2088-01-01';
    const labelSeparator = 'test-separator';

    render(
      <DateSimple
        label={LABELS.START_DATE}
        startDate={startDate}
        labelSeparator={labelSeparator}
      />,
    );
    const labelSeparatorElement = screen.queryByText(`${labelSeparator}`);

    expect(labelSeparatorElement).toBeNull();
  });

  it('displays start date and additional info passed as children', () => {
    const startDate = '2088-01-01';
    const additionalInfoText = 'Test additional info element';

    render(
      <DateSimple startDate={startDate}>
        <>
          <span>{additionalInfoText}</span>
        </>
      </DateSimple>,
    );

    expect(screen.getByTestId('date-time-start')).toHaveTextContent(startDate);
    expect(screen.getByText(`${additionalInfoText}`)).toBeInTheDocument();
  });
});
