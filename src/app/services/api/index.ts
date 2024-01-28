import { coursesData } from '../data/courses-data';
import { type DataMap } from '../data/courses-data.types';

const dataProviders: DataMap = {
  courses: coursesData
};

export const fetchDataByName = (dataName: keyof DataMap) => {
  if (!dataName || !dataProviders[dataName]) {
    throw Promise.reject(new Error(`No data avialable for name: ${dataName}`));
  }
  return Promise.resolve(dataProviders[dataName]);
};
