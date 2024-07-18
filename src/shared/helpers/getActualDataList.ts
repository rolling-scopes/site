import { getCourseDate } from './getCourseDate';
import { Course } from '@/app/types';
import { isCourse } from '@/entities/courses/helpers/is-course';
import { EventCardProps } from '@/entities/events';
import { dayJS } from '@/shared/helpers/dayJS';

type DataType = Course[] | EventCardProps[];

type getActualDataParams<T extends DataType> = {
  data: T;
  staleAfter: number;
  filterStale?: boolean;
};

type getActualDataType = <T extends DataType>(props: getActualDataParams<T>) => T;

export const getActualData: getActualDataType = ({
  data,
  staleAfter,
  filterStale = true,
}) => {
  let dataWithTBD = mapStaleAsTBD(data, staleAfter);

  if (filterStale) dataWithTBD = filterData(dataWithTBD);

  return sortDataList(dataWithTBD);
};

const mapStaleAsTBD = <T extends DataType>(data: T, staleAfter: number): T =>
  data.map((item) => {
    const datePath = isCourse(item) ? 'startDate' : 'date';
    const date = isCourse(item) ? item.startDate : item.date;

    return {
      ...item,
      [datePath]: getCourseDate(date, staleAfter),
    };
  }) as T;

const filterData = <T extends DataType>(data: T): T =>
  data.filter((item) => {
    const date = isCourse(item) ? item.startDate : item.date;

    return date !== 'TBD';
  }) as T;

const sortDataList = <T extends DataType>(data: T): T =>
  data.sort((a, b) => {
    const dateA = isCourse(a) ? a.startDate : a.date;
    const dateB = isCourse(b) ? b.startDate : b.date;

    if (dateA === 'TBD' || dateB === 'TBD') {
      return dateA === 'TBD' ? 1 : -1;
    }

    return dayJS(dateA).diff(dayJS(dateB));
  }) as T;
