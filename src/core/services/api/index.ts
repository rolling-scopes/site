import {
  type DataMap,
  angularPath,
  awsDevPath,
  courses,
  coursesPath,
  jsPath,
  jsPathRu,
} from 'data';

export const dataProviders: DataMap = {
  courses: courses,
  coursesPath: coursesPath,
  javascript: jsPath,
  javascriptRu: jsPathRu,
  angular: angularPath,
  awsDev: awsDevPath,
};
