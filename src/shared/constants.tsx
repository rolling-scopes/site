import { ReactNode } from 'react';
import { BLOCKS, Block, INLINES, Inline } from '@contentful/rich-text-types';
import Image from 'next/image';

import { isExternalUri } from '@/shared/helpers/is-external-uri';
import { prepareAssetImage } from '@/shared/helpers/prepare-asset-image';
import { ApiResourceLocale, Language } from '@/shared/types/';
import { LinkCustom } from '@/shared/ui/link-custom';
import { ContentList } from '@/shared/ui/list/content-list';
import { ListItem } from '@/shared/ui/list/list-item';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';

export const RS_FOUNDATION_YEAR = '2013';
export const RS_EMAIL = 'rolling.scopes@gmail.com';
export const TO_BE_DETERMINED = 'TBD';
export const RS_GRADUATED_ONLY = 'Alumni only';
export const REGISTRATION_WILL_OPEN_SOON = 'Registration will open soon!';
export const REGISTRATION_WILL_OPEN_SOON_RU = 'Регистрация откроется скоро!';
export const UNKNOWN_API_ERROR = 'Unknown error, API request failed.';
export const YOUTUBE_API_MAX_RESULTS_PER_PAGE = 50;
/**
 * https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/links
 */
export const API_MAX_INCLUDE_DEPTH = 10;
export const API_OMIT_LINKED_ITEMS_INCLUDE_DEPTH = 0;

export const LABELS = {
  START_DATE: 'Course starts on:',
  START_DATE_SHORT: 'Start:',
  REGISTRATION_END: 'Enroll untill:',
  COURSE_LANGUAGE_EN: 'English',
  COURSE_LANGUAGE_RU: 'Russian',
  MENTOR_ACTIVITIES: 'Mentorship starts on:',
  MENTOR_ACTIVITIES_SEPARATOR: '-',
} as const;

export const PAGE_NAMES = {
  SCHOOL: 'school',
  COURSES: 'courses',
  COMMUNITY: 'community',
  MENTORSHIP: 'mentorship',
  MERCH: 'merch',
} as const;

// ⚠️ These links are used to identify courses from the API
export const COURSE_LINKS = {
  JS_EN: 'https://rs.school/courses/javascript',
  JS_RU: 'https://rs.school/courses/javascript-ru',
  JS_PRESCHOOL_RU: 'https://rs.school/courses/javascript-preschool-ru',
  REACT: 'https://rs.school/courses/reactjs',
  ANGULAR: 'https://rs.school/courses/angular',
  NODE: 'https://rs.school/courses/nodejs',
  AWS_FUNDAMENTALS: 'https://rs.school/courses/aws-fundamentals',
  AWS_CLOUD_DEVELOPER: 'https://rs.school/courses/aws-cloud-developer',
  AWS_DEVOPS: 'https://rs.school/courses/aws-devops',
  AWS_AI: 'https://rs.school/courses/aws-ai',
};

export const KEY_CODES = {
  ESCAPE: 'Escape',
  ENTER: 'Enter',
  SPACE: 'Space',
} as const;

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export const API_LOCALE_DICTIONARY: Record<Language, ApiResourceLocale> = {
  ru: 'ru',
  en: 'en-US',
};

export const API_CONTENT_TYPE_DICTIONARY = {
  TRAINER: 'contributor',
  COURSE: 'course',
  COURSE_PAGE: 'homePage',
} as const;
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

export const NAV_MENU_LABELS = {
  RS_SCHOOL: 'RS School',
  COURSES: 'Courses',
  COMMUNITY: 'Community',
  MENTORSHIP: 'Mentorship',
  DOCS: 'Docs',
  SUPPORT_US: 'Support Us',
} as const;

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
  AWS_AI: 'aws-ai',
  REACT: 'reactjs',
  MENTORSHIP: 'mentorship',
  DOCS_EN: 'docs/en',
  DOCS_RU: 'docs/ru',
  MERCH: 'merch',
  NOT_FOUND: '*',
} as const;

export const SWR_CACHE_KEY = { MENTORS_PLAYLIST: 'MENTORS_PLAYLIST' };
export const RICH_TEXT_OPTIONS = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: Block | Inline, children: ReactNode) => {
      if (!children) {
        return null;
      }

      // hack to prevent rendering an empty trailing paragraph
      const isEmptyNode = children.toString().trim() === '';

      return isEmptyNode ? '' : <Paragraph>{children}</Paragraph>;
    },
    [BLOCKS.HEADING_3]: (_node: Block | Inline, children: ReactNode) => (
      <Subtitle>{children}</Subtitle>
    ),
    [BLOCKS.UL_LIST]: (_node: Block | Inline, children: ReactNode) => (
      <ContentList>{children}</ContentList>
    ),
    [BLOCKS.OL_LIST]: (_node: Block | Inline, children: ReactNode) => (
      <ContentList ordered>{children}</ContentList>
    ),
    [BLOCKS.LIST_ITEM]: (_node: Block | Inline, children: ReactNode) => (
      <ListItem>{children}</ListItem>
    ),
    [INLINES.HYPERLINK]: (node: Inline | Block, children: ReactNode) => (
      <LinkCustom external={isExternalUri(node.data.uri)} href={node.data.uri}>
        {children}
      </LinkCustom>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Inline | Block) => {
      const src = prepareAssetImage(node.data.target.fields.file);
      const alt = node.data.target.fields.title;

      return <Image data-id="asset-image" src={src} alt={alt} />;
    },
  },
};

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const OG_SITE_NAME = 'The Rolling Scopes School';
export const PREFERRED_REGION = 'auto';
export const DYNAMIC = 'force-static';
