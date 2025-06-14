export const COURSE_TITLES = {
  JS_PRESCHOOL_RU: 'JS / Front-end Pre-school RU',
  JS_EN: 'JS / Front-end EN',
  JS_RU: 'JS / Front-end RU',
  REACT: 'React',
  ANGULAR: 'Angular',
  NODE: 'Node.js',
  AWS_FUNDAMENTALS: 'AWS Fundamentals',
  AWS_CLOUD_DEVELOPER: 'AWS Cloud Developer',
  AWS_DEVOPS: 'AWS DevOps',
  AWS_AI: 'AWS AI',
} as const;

export type CourseNames = typeof COURSE_TITLES;
export type CourseNamesKeys = CourseNames[keyof CourseNames];

export const DISCORD_LINKS = {
  [COURSE_TITLES.JS_PRESCHOOL_RU]: 'https://discord.com/invite/gFnRh8Sudg',
  [COURSE_TITLES.JS_EN]: 'https://discord.com/invite/uW5cCHR',
  [COURSE_TITLES.JS_RU]: 'https://discord.com/invite/QvEYg7EaQ4',
  [COURSE_TITLES.REACT]: 'https://discord.com/invite/zyRcphs3px',
  [COURSE_TITLES.ANGULAR]: 'https://discord.com/invite/xwReXYqvs7',
  [COURSE_TITLES.NODE]: 'https://discord.com/invite/8BFb8va',
  [COURSE_TITLES.AWS_FUNDAMENTALS]: 'https://discord.com/invite/WEZxwRa4J6',
  [COURSE_TITLES.AWS_CLOUD_DEVELOPER]: 'https://discord.com/invite/WEZxwRa4J6',
  [COURSE_TITLES.AWS_DEVOPS]: 'https://discord.com/invite/WEZxwRa4J6',
  [COURSE_TITLES.AWS_AI]: 'https://discord.com/invite/WEZxwRa4J6',
} as const;
