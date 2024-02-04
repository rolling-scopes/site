import { type DataMap } from '@/app/services/data/courses-data.types';
import { fetchDataByName } from '@/app/services/api';
import { useEffect, useState } from 'react';

export const useDataByName = <K extends keyof DataMap>(
  dataName: keyof DataMap,
  fetchDataFn = fetchDataByName
) => {
  const [data, setData] = useState<DataMap[K] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchDataFn(dataName);
        setData(fetchedData as DataMap[K]);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dataName]);

  return { data, loading, error };
};
