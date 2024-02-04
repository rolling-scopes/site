import { angularPath, awsPath, coursesData, coursesPath, jsPath } from '../data/courses-data';
import { type DataMap } from '../data/courses-data.types';

const dataProviders: DataMap = {
  courses: coursesData,
  coursesPath: coursesPath,
  javascriptPath: jsPath,
  angularPath: angularPath,
  awsDevPath: awsPath
};

export const fetchDataByName = (dataName: keyof DataMap) => {
  if (!dataName || !dataProviders[dataName]) {
    throw Promise.reject(new Error(`No data avialable for name: ${dataName}`));
  }
  return Promise.resolve(dataProviders[dataName]);
};
