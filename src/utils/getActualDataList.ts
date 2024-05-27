import dayjs, { extend } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

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
  extend(customParseFormat);

  const postponeDate = dayjs().subtract(actualDelayInDays, 'day');
  const actualDataList = dataList.filter((item) => dayjs(item.date, 'YYYY-MM-DD') >= postponeDate);

  const sortedList = (actualDataList as DataListType<DataItemWithDate>).sort((a, b) =>
    dayjs(a.date).diff(b.date),
  );

  return sorted ? sortedList : actualDataList;
};
