import { hasDayInDate } from './has-day';

const dates = {
  withDay: 'Oct 25, 2024',
  withoutDay: 'Oct, 2024',
  emptyDate: '',
};

describe('hasDayInDate function', () => {
  it('should return true if day is and false if it is not', () => {
    expect(hasDayInDate(dates.withDay)).toBeTruthy();
    expect(hasDayInDate(dates.withoutDay)).toBeFalsy();
    expect(hasDayInDate(dates.emptyDate)).toBeFalsy();
  },
  );
});
