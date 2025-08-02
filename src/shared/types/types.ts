import { HttpStatus } from 'http-status';

import { CoursePageResponse } from '@/entities/course-page/types';
import { ApiBaseClass } from '@/shared/api/api-base-class';
import { HTTP_METHOD } from '@/shared/constants';
import {
  TypeAboutCourseWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeDonationWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeHeroSectionWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeHighlightCardWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeLearningPathStagesWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeMediaGridWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeUpcomingCoursesWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeVideoBlockWithAllLocalesAndWithoutLinkResolutionResponse,
} from '@/shared/types/contentful';
import { AboutCourseSectionData } from '@/widgets/about-course';
import { HeroSectionData } from '@/widgets/hero-course/types';
import { HighlightCardData } from '@/widgets/highlight-card/types';
import { LearningPathStagesSectionData } from '@/widgets/learning-path-stages';
import { MediaGridSectionData } from '@/widgets/media-grid/types';
import { MediaTextBlockSectionData } from '@/widgets/media-text-block';
import { SupportUsSectionData } from '@/widgets/support/types';
import { UpcomingCoursesSectionData } from '@/widgets/upcoming-courses/types';
import { VideoBlockSectionData } from '@/widgets/video-block';
import type { BaseEntry } from 'contentful';
import { LinkList } from 'data';

export type ListData = (string | LinkList)[] | [];
export type ListType = 'marked' | 'unmarked';

export type Language = 'en' | 'ru';

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
};

export type ApiServices = {
  rest: ApiBaseClass;
  youtube: ApiBaseClass;
};

export type HttpMethod = (typeof HTTP_METHOD)[keyof typeof HTTP_METHOD];

export type QueryStringParams = Record<string, unknown>;

export type HttpHeaders = Record<string, string>;

export type RequestBody = RequestInit['body'];

export type RequestOptions = {
  method?: HttpMethod;
  params?: QueryStringParams;
  headers?: HttpHeaders;
  body?: RequestBody;
  rethrow?: boolean;
  shouldLog?: boolean;
};

export type HttpStatusCodes = HttpStatus[keyof HttpStatus];

type QueryResultSuccess<TResponse> = {
  isSuccess: true;
  result: TResponse;
};

type QueryResultError<TResponse> = {
  isSuccess: false;
  result: TResponse | null;
};

export type QueryResult<TResponse> = (
  | QueryResultSuccess<TResponse>
  | QueryResultError<TResponse>
) & {
  status: HttpStatusCodes;
  statusText?: string;
  responseHeaders?: Record<string, string>;
};

export type ApiResourceLocale = 'en-US' | 'ru';

/**
 * https://www.contentful.com/developers/docs/references/errors/
 */
export type ApiResponseError = {
  sys: {
    type: 'Error';
    id:
      | 'BadRequest'
      | 'InvalidQuery'
      | 'AccessTokenInvalid'
      | 'AccessDenied'
      | 'NotFound'
      | 'VersionMismatch'
      | 'ValidationFailed'
      | 'UnknownField'
      | 'InvalidEntry'
      | 'RateLimitExceeded'
      | 'ServerError'
      | 'Hibernated';
  };
  message: string;
  requestId: string;
};

export type ExtractSectionName<TContentType extends BaseEntry> =
  TContentType['sys']['contentType']['sys']['id'];

export type SectionName =
  | ExtractSectionName<TypeAboutCourseWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeLearningPathStagesWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeVideoBlockWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeHeroSectionWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeUpcomingCoursesWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeDonationWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeMediaGridWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeHighlightCardWithAllLocalesAndWithoutLinkResolutionResponse>;

type SectionBase<TName extends SectionName, TData, TId extends string = string> = {
  id: TId;
  name: TName;
  data: TData;
};

export type Section =
  | SectionBase<Extract<SectionName, 'aboutCourse'>, AboutCourseSectionData>
  | SectionBase<Extract<SectionName, 'mediaTextBlock'>, MediaTextBlockSectionData>
  | SectionBase<Extract<SectionName, 'learningPathStages'>, LearningPathStagesSectionData>
  | SectionBase<Extract<SectionName, 'videoBlock'>, VideoBlockSectionData>
  | SectionBase<Extract<SectionName, 'heroSection'>, HeroSectionData>
  | SectionBase<Extract<SectionName, 'upcomingCourses'>, UpcomingCoursesSectionData>
  | SectionBase<Extract<SectionName, 'donation'>, SupportUsSectionData>
  | SectionBase<Extract<SectionName, 'mediaGrid'>, MediaGridSectionData>
  | SectionBase<Extract<SectionName, 'highlightCard'>, HighlightCardData>;

export type PageResponseSections = CoursePageResponse['items'][0]['fields']['sections'];
