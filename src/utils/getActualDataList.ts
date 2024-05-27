import dayjs, { extend } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

type DataListType<T> = Array<T>;
type DataItem = Record<string, string | HTMLElement>;
interface DataItemWithDate extends DataItem {
  date: string; // 'DD.MM.YYYY'
}

export type ActualDataListProps = {
  dataList: DataListType<DataItemWithDate>;
  actualDelayInDays: number;
};

export const getActualDataList = ({
  dataList,
  actualDelayInDays,
}: ActualDataListProps): DataListType<DataItemWithDate> | [] => {
  extend(customParseFormat);

  const postponeDate = dayjs().subtract(actualDelayInDays, 'day');
  const actualDataList = dataList.filter((item) => dayjs(item.date, 'YYYY-MM-DD') >= postponeDate);

  return actualDataList;
};
