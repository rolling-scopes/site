import { type Courses } from '@/shared/services/data/model';
import { type DataMap } from '@/shared/services/data/model';
import { fetchDataByName } from '@/shared/services/api';
import { useEffect, useState } from 'react';

type Datatype = Courses[] | null;

export const useDataByName = <T extends Datatype>(dataName: keyof DataMap) => {
  const [data, setData] = useState<T | []>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    try {
      const fetchedData = fetchDataByName(dataName);
      setData(fetchedData);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [dataName]);

  return { data, loading, error };
};
