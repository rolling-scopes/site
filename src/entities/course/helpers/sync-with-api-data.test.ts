import { describe, it } from 'vitest';
import { ALIAS_QUARTER_REGEXP } from '@/entities/course/constants';

const testAliases = [
  {
    alias: 'react-2025-q1',
    expected: 'react',
  },
  {
    alias: 'js-fe-2024Q4',
    expected: 'js-fe',
  },
  {
    alias: 'js-fe-en-2024q4',
    expected: 'js-fe-en',
  },
  {
    alias: 'nodejs-2024-q3',
    expected: 'nodejs',
  },
  {
    alias: 'aws-devops-2024q3',
    expected: 'aws-devops',
  },
  {
    alias: 'react-2024-q3',
    expected: 'react',
  },
  {
    alias: 'angular-2024Q3',
    expected: 'angular',
  },
  {
    alias: 'js-fe-preschool-2024q2',
    expected: 'js-fe-preschool',
  },
  {
    alias: 'aws-developer-2024q2',
    expected: 'aws-developer',
  },
  {
    alias: 'aws-fundamentals-2024q2',
    expected: 'aws-fundamentals',
  },
  {
    alias: 'nodejs-2024-q1',
    expected: 'nodejs',
  },
  {
    alias: 'js-fe-2023Q4',
    expected: 'js-fe',
  },
  {
    alias: 'nodejs-xstack-lab',
    expected: 'nodejs-xstack-lab',
  },
  {
    alias: 'js-fe-en-2023q4',
    expected: 'js-fe-en',
  },
  {
    alias: 'aws-developer-2023q4',
    expected: 'aws-developer',
  },
  {
    alias: 'react-2023-q4',
    expected: 'react',
  },
  {
    alias: 'js-fe-preschool-2023q4-UZ',
    expected: 'js-fe-preschool-UZ',
  },
  {
    alias: 'angular-2023Q4',
    expected: 'angular',
  },
  {
    alias: 'aws-fundamentals-2023q3',
    expected: 'aws-fundamentals',
  },
  {
    alias: 'js-fe-preschool-2023q2',
    expected: 'js-fe-preschool',
  },
  {
    alias: 'nodejs-2023-q2',
    expected: 'nodejs',
  },
  {
    alias: 'js-fe-lt-2023q2',
    expected: 'js-fe-lt',
  },
  {
    alias: 'aws-fundamentals-2023q2',
    expected: 'aws-fundamentals',
  },
  {
    alias: 'aws-developer-2023q2',
    expected: 'aws-developer',
  },
  {
    alias: 'nodejs-2023-uz',
    expected: 'nodejs-uz',
  },
  {
    alias: 'react-2023-q1',
    expected: 'react',
  },
  {
    alias: 'angular-2023Q1',
    expected: 'angular',
  },
  {
    alias: 'js-fe-2023Q1',
    expected: 'js-fe',
  },
  {
    alias: 'aws-2023q1',
    expected: 'aws',
  },
  {
    alias: 'aws-workshops-2023Q1',
    expected: 'aws-workshops',
  },
  {
    alias: 'js-fe-preschool-2022q4',
    expected: 'js-fe-preschool',
  },
  {
    alias: 'nodejs-2022-q4',
    expected: 'nodejs',
  },
  {
    alias: 'js-fe-turkey-2022',
    expected: 'js-fe-turkey',
  },
  {
    alias: 'android-2022',
    expected: 'android',
  },
  {
    alias: 'angular-2022Q3',
    expected: 'angular',
  },
  {
    alias: 'react-2022-q3',
    expected: 'react',
  },
  {
    alias: 'js-fe-en-2022q3',
    expected: 'js-fe-en',
  },
  {
    alias: 'js-fe-lt-2022q3',
    expected: 'js-fe-lt',
  },
  {
    alias: 'aws-2022q3',
    expected: 'aws',
  },
  {
    alias: 'js-fe-2022Q3',
    expected: 'js-fe',
  },
  {
    alias: 'aws-july-2022',
    expected: 'aws-july',
  },
  {
    alias: 'golang',
    expected: 'golang',
  },
  {
    alias: 'aws-june-2022',
    expected: 'aws-june',
  },
  {
    alias: 'js-fe-preschool-2022q2',
    expected: 'js-fe-preschool',
  },
  {
    alias: 'nodejs-2022-q2',
    expected: 'nodejs',
  },
  {
    alias: 'aws-2022q2',
    expected: 'aws',
  },
  {
    alias: 'upskill-me',
    expected: 'upskill-me',
  },
  {
    alias: 'rs-support-2022',
    expected: 'rs-support',
  },
  {
    alias: 'js-fe-en-2022',
    expected: 'js-fe-en',
  },
  {
    alias: 'react-2022-q1',
    expected: 'react',
  },
  {
    alias: 'angular-2022Q1',
    expected: 'angular',
  },
  {
    alias: 'js-fe-2022Q1',
    expected: 'js-fe',
  },
  {
    alias: 'ml-intro-2022Q1',
    expected: 'ml-intro',
  },
  {
    alias: 'js-fe-lt',
    expected: 'js-fe-lt',
  },
  {
    alias: 'js-fe-preschool',
    expected: 'js-fe-preschool',
  },
  {
    alias: 'st-2021q3',
    expected: 'st',
  },
  {
    alias: 'nodejs-2021-q4',
    expected: 'nodejs',
  },
  {
    alias: 'js-fe-2021Q3',
    expected: 'js-fe',
  },
  {
    alias: 'uz-st-2021',
    expected: 'uz-st',
  },
  {
    alias: 'aws-2021',
    expected: 'aws',
  },
  {
    alias: 'angular-2021Q3',
    expected: 'angular',
  },
  {
    alias: 'react-2021-q3',
    expected: 'react',
  },
  {
    alias: 'js-fe-ge',
    expected: 'js-fe-ge',
  },
  {
    alias: 'js-fe-preschool-2021Q3',
    expected: 'js-fe-preschool',
  },
  {
    alias: 'uz-lab',
    expected: 'uz-lab',
  },
  {
    alias: 'aws-june-2021',
    expected: 'aws-june',
  },
  {
    alias: 'nodejs-2021-q2',
    expected: 'nodejs',
  },
  {
    alias: 'st-2021-spring',
    expected: 'st-spring',
  },
  {
    alias: 'ios-2021',
    expected: 'ios',
  },
  {
    alias: 'android-2021',
    expected: 'android',
  },
  {
    alias: 'js-fe-lt-2021',
    expected: 'js-fe-lt',
  },
  {
    alias: 'js-fe-en',
    expected: 'js-fe-en',
  },
  {
    alias: 'nodejs-aws-2021q1',
    expected: 'nodejs-aws',
  },
  {
    alias: 'js-fe-2021Q1',
    expected: 'js-fe',
  },
  {
    alias: 'angular-2021Q1',
    expected: 'angular',
  },
  {
    alias: 'react-2021-q1',
    expected: 'react',
  },
  {
    alias: 'ml-intro-2021q1',
    expected: 'ml-intro',
  },
  {
    alias: 'st-2021-q1',
    expected: 'st',
  },
  {
    alias: 'nodejs-aws',
    expected: 'nodejs-aws',
  },
  {
    alias: 'nodejs-2020-q3',
    expected: 'nodejs',
  },
  {
    alias: 'js-2020-q3',
    expected: 'js',
  },
  {
    alias: 'UpSkill-Lab',
    expected: 'UpSkill-Lab',
  },
  {
    alias: 'react-2020-Q3',
    expected: 'react',
  },
  {
    alias: 'angular-2020-Q3',
    expected: 'angular',
  },
  {
    alias: 'epam-js-mentoring',
    expected: 'epam-js-mentoring',
  },
  {
    alias: 'js-fundamentals',
    expected: 'js-fundamentals',
  },
  {
    alias: 'nodejs-2020-q1',
    expected: 'nodejs',
  },
  {
    alias: 'it-hub-frontend',
    expected: 'it-hub-frontend',
  },
  {
    alias: 'rss-pl-2020-q1',
    expected: 'rss-pl',
  },
  {
    alias: 'test-course',
    expected: 'test-course',
  },
  {
    alias: 'android-2020',
    expected: 'android',
  },
  {
    alias: 'ios-2020',
    expected: 'ios',
  },
  {
    alias: 'angular-2020-Q1',
    expected: 'angular',
  },
  {
    alias: 'react-2020-Q1',
    expected: 'react',
  },
  {
    alias: 'epamlearningjs',
    expected: 'epamlearningjs',
  },
  {
    alias: 'st-2019-q3',
    expected: 'st',
  },
  {
    alias: 'rs-st-2019-q1',
    expected: 'rs-st',
  },
  {
    alias: 'rs-2019-q1',
    expected: 'rs',
  },
];

describe("should cut quarter and a year of the course's alias", () => {
  it.each(testAliases)('$alias -> $expected', ({ alias, expected }) => {
    expect(alias.replace(ALIAS_QUARTER_REGEXP, '')).toBe(expected);
  });
});
