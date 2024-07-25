import {
  angularPath,
  awsDevPath,
  courses,
  coursesPath,
  jsPath,
  jsPathRu,
} from '../data';
import { type DataMap } from '../data';

const dataProviders: DataMap = {
  courses: courses,
  coursesPath: coursesPath,
  javascript: jsPath,
  javascriptRu: jsPathRu,
  angular: angularPath,
  awsDev: awsDevPath,
};

export const fetchDataByName = (dataName: keyof DataMap) => {
  if (!dataName || !dataProviders[dataName]) {
    throw Promise.reject(new Error(`No data avialable for name: ${dataName}`));
  }
  return Promise.resolve(dataProviders[dataName]);
};
