import { getCourseDate } from './getCourseDate';
import { Course } from '@/app/types';
import { isCourse } from '@/entities/courses/helpers/is-course';
import { EventCardProps } from '@/entities/events';
import { dayJS } from '@/shared/helpers/dayJS';

type DataListType = Course[] | EventCardProps[];

type ActualDataListParams<T extends DataListType> = {
  dataList: T;
  actualDelayInDays: number;
  filtered?: boolean;
};

type getActualDataListType = <T extends DataListType>(props: ActualDataListParams<T>) => T;

export const getActualDataList: getActualDataListType = ({
  dataList,
  actualDelayInDays,
  filtered = true,
}) => {
  let data = mapDataListWithTBD(dataList, actualDelayInDays);

  if (filtered) {
    data = filterDataList(data);
  }

  return sortDataList(data);
};

const mapDataListWithTBD = <T extends DataListType>(dataList: T, actualDelayInDays: number): T =>
  dataList.map((item) => {
    const datePath = isCourse(item) ? 'startDate' : 'date';
    const date = isCourse(item) ? item.startDate : item.date;

    return {
      ...item,
      [datePath]: getCourseDate(date, actualDelayInDays),
    };
  }) as T;

const filterDataList = <T extends DataListType>(dataList: T): T =>
  dataList.filter((item) => {
    const date = isCourse(item) ? item.startDate : item.date;

    return date !== 'TBD';
  }) as T;

const sortDataList = <T extends DataListType>(dataList: T): T =>
  dataList.sort((a, b) => {
    const dateA = isCourse(a) ? a.startDate : a.date;
    const dateB = isCourse(b) ? b.startDate : b.date;

    if (dateA === 'TBD' || dateB === 'TBD') {
      return dateA === 'TBD' ? 1 : -1;
    }

    return dayJS(dateA).diff(dayJS(dateB));
  }) as T;
