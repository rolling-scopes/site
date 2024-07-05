import { getCourseDate } from './getCourseDate';
import { dayJS } from '@/app/services/dayjs';

type DataListType<T> = Array<T>;
type DataItem = Record<string, string | HTMLElement>;
interface DataItemWithDate extends DataItem {
  date: string; // 'YYYY-MM-DD'
}

export type ActualDataListProps = {
  dataList: DataListType<DataItemWithDate>;
  actualDelayInDays: number;
  sorted?: boolean;
};

export const getActualDataList = ({
  dataList,
  actualDelayInDays,
  sorted = true,
}: ActualDataListProps): DataListType<DataItemWithDate> | [] => {
  const actualDataList = dataList.filter(
    (item) => getCourseDate(item.date, actualDelayInDays) !== 'TBD',
  );

  const sortedList = (actualDataList as DataListType<DataItemWithDate>).sort((a, b) =>
    dayJS(a.date).diff(b.date),
  );

  return sorted ? sortedList : actualDataList;
};
