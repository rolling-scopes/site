import { getCourseDate } from './getCourseDate';
import { isCourse } from './is-course';
import type { Course } from '@/entities/course';
import { Event } from '@/entities/event';
import { TO_BE_DETERMINED } from '@/shared/constants';
import { dayJS } from '@/shared/helpers/dayJS';

type DataType = Course[] | Event[];

type GetActualDataParams<T extends DataType> = {
  data: T;
  staleAfter?: number;
  filterStale?: boolean;
};

type GetActualDataType = <T extends DataType>(params: GetActualDataParams<T>) => T;

export const getActualData: GetActualDataType = ({ data, staleAfter, filterStale = true }) => {
  let dataWithTBD = mapStaleAsTBD(data, staleAfter);

  if (filterStale) {
    dataWithTBD = filterStaleData(dataWithTBD);
  }

  return sortData(dataWithTBD);
};

const mapStaleAsTBD = <T extends DataType>(data: T, staleAfter?: number): T =>
  data.map((item) => {
    const datePath = isCourse(item) ? 'startDate' : 'date';
    const date = isCourse(item) ? item.startDate : item.date;
    let courseDate;

    if (staleAfter) {
      courseDate = getCourseDate(date, staleAfter);
    } else if (isCourse(item)) {
      const daysBeforeStale = dayJS(item.registrationEndDate).diff(item.startDate, 'd');

      courseDate = getCourseDate(date, daysBeforeStale);
    }

    return {
      ...item,
      [datePath]: courseDate,
    };
  }) as T;

const filterStaleData = <T extends DataType>(data: T): T =>
  data.filter((item) => {
    const date = isCourse(item) ? item.startDate : item.date;

    return date !== TO_BE_DETERMINED;
  }) as T;

const sortData = <T extends DataType>(data: T): T =>
  data.sort((a, b) => {
    const dateA = isCourse(a) ? a.startDate : a.date;
    const dateB = isCourse(b) ? b.startDate : b.date;

    if (dateA === TO_BE_DETERMINED || dateB === TO_BE_DETERMINED) {
      return dateA === TO_BE_DETERMINED ? 1 : -1;
    }

    return dayJS(dateA).diff(dayJS(dateB));
  }) as T;
