import { dayJS } from '@/shared/helpers/dayJS';
import { getCourseDate } from './getCourseDate';
import { Course } from '@/app/types';
import { isCourse } from '@/entities/courses/helpers/is-course';
import { EventCardProps } from '@/entities/events';


type DataListType = (Course | EventCardProps)[];

export type ActualDataListParams = {
  dataList: DataListType;
  actualDelayInDays: number;
  filtered?: boolean;
};

type getActualDataListType = (props: ActualDataListParams) => DataListType;

const filterDataList = (dataList: DataListType) =>
  dataList.filter((item) => {
    const date = isCourse(item) ? item.startDate : item.date;

    return date !== 'TBD';
  });

const sortDataList = (dataList: DataListType) =>
  dataList.sort((a, b) => {
    const dateA = isCourse(a) ? a.startDate : a.date;
    const dateB = isCourse(b) ? b.startDate : b.date;

    if (dateA === 'TBD' || dateB === 'TBD') {
      return dateA === 'TBD' ? 1 : -1;
    }

    return dayjs(dateA).diff(dayjs(dateB));
  });

export const getActualDataList: getActualDataListType = ({
  dataList,
  actualDelayInDays,
  filtered = true,
}) => {
  let data = dataList.map((item) => {
    const datePath = isCourse(item) ? 'startDate' : 'date';
    const date = isCourse(item) ? item.startDate : item.date;

    return {
      ...item,
      [datePath]: getCourseDate(date, actualDelayInDays),
    };
  });

  if (filtered) {
    data = filterDataList(data);
  }

  return sortDataList(data);
};
