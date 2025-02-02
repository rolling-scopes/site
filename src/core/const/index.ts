export const ANCHORS = {
  ABOUT_COMMUNITY: 'about-community',
  ABOUT_SCHOOL: 'about-school',
  MENTORS_WANTED: 'mentors-wanted',
  UPCOMING_COURSES: 'upcoming-courses',
  EVENTS: 'events',
  MERCH: 'merch',
  CONTRIBUTE: 'contribute',
  DONATE: 'donate',
};

export const COURSE_STALE_AFTER_DAYS = 14;
export const COURSE_UPCOMING_PERIOD_MONTHS = 3;

export const LINKS = {
  BECOME_MENTOR: 'https://app.rs.school/registry/mentor',
  BECOME_CONTRIBUTOR:
    'https://docs.google.com/forms/d/e/1FAIpQLSdGKdEHK1CnZjgll9PpMU0xD1m0hm6xGoXc98H7woCDulyQkg/viewform',
  MERCH: 'https://sloths.rs.school/',
  DONATE_OPEN_COLLECTIVE: 'https://opencollective.com/rsschool',
  DONATE_BOOSTY: 'https://boosty.to/rsschool',
  ANGULAR_MENTORING: 'https://github.com/rolling-scopes-school/tasks/tree/master/angular/mentoring',
};

export const ROUTES = {
  HOME: '/',
  COMMUNITY: 'community',
  COURSES: 'courses',
  NODE_JS: 'nodejs',
  JS: 'javascript',
  JS_RU: 'javascript-ru',
  JS_PRESCHOOL_RU: 'javascript-preschool-ru',
  ANGULAR: 'angular',
  AWS_DEVELOPER: 'aws-cloud-developer',
  AWS_FUNDAMENTALS: 'aws-fundamentals',
  AWS_DEVOPS: 'aws-devops',
  REACT: 'reactjs',
  MENTORSHIP: 'mentorship',
  DOCS_EN: 'docs/en',
  DOCS_RU: 'docs/ru',
  NOT_FOUND: '*',
} as const;
