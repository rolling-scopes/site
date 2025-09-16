import { HttpStatus } from 'http-status';

import { CoursePageResponse } from '@/entities/course-page/types';
import { ApiBaseClass } from '@/shared/api/api-base-class';
import { HTTP_METHOD } from '@/shared/constants';
import {
  TypeAboutCourseItemWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeAboutCourseWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeDonationWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeExternalEmbedContentWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeHeroSectionWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeHighlightCardWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeInfoGridWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeLearningPathStagesWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeLinkWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeMarqueeWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeMediaGridWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeSlideWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeSliderWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeSocialLinkWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeUpcomingCoursesWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeVideoBlockWithAllLocalesAndWithoutLinkResolutionResponse,
} from '@/shared/types/contentful';
import { LinkData } from '@/shared/ui/link-custom/types';
import { SlideData, SliderData } from '@/shared/ui/slider/types';
import { SocialLinkData } from '@/shared/ui/social-media-item/constants';
import { AboutCourseSectionData } from '@/widgets/about-course';
import { GridItemData } from '@/widgets/about-course/types';
import { ExternalEmbedContentData } from '@/widgets/external-embed-content';
import { HeroSectionData } from '@/widgets/hero/types';
import { HighlightCardData } from '@/widgets/highlight-card/types';
import { InfoGridData } from '@/widgets/info-grid';
import { LearningPathStagesSectionData } from '@/widgets/learning-path-stages';
import { MarqueeSectionData } from '@/widgets/marquee/types';
import { ApiMediaGridSectionData } from '@/widgets/media-grid/types';
import { MediaTextBlockSectionData } from '@/widgets/media-text-block';
import { SupportUsSectionData } from '@/widgets/support/types';
import { UpcomingCoursesSectionData } from '@/widgets/upcoming-courses/types';
import { VideoBlockSectionData } from '@/widgets/video-block';
import type { BaseEntry } from 'contentful';

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
  | ExtractSectionName<TypeAboutCourseItemWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeLearningPathStagesWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeVideoBlockWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeHeroSectionWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeUpcomingCoursesWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeDonationWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeMediaGridWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeHighlightCardWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeExternalEmbedContentWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeInfoGridWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeMarqueeWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeSliderWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeSlideWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeSocialLinkWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeLinkWithAllLocalesAndWithoutLinkResolutionResponse>;

type SectionBase<TName extends SectionName, TData, TId extends string = string> = {
  id: TId;
  name: TName;
  data: TData;
};

export type Section =
  | SectionBase<Extract<SectionName, 'aboutCourse'>, AboutCourseSectionData>
  | SectionBase<Extract<SectionName, 'aboutCourseItem'>, GridItemData>
  | SectionBase<Extract<SectionName, 'mediaTextBlock'>, MediaTextBlockSectionData>
  | SectionBase<Extract<SectionName, 'learningPathStages'>, LearningPathStagesSectionData>
  | SectionBase<Extract<SectionName, 'videoBlock'>, VideoBlockSectionData>
  | SectionBase<Extract<SectionName, 'heroSection'>, HeroSectionData>
  | SectionBase<Extract<SectionName, 'upcomingCourses'>, UpcomingCoursesSectionData>
  | SectionBase<Extract<SectionName, 'donation'>, SupportUsSectionData>
  | SectionBase<Extract<SectionName, 'mediaGrid'>, ApiMediaGridSectionData>
  | SectionBase<Extract<SectionName, 'highlightCard'>, HighlightCardData>
  | SectionBase<Extract<SectionName, 'externalEmbedContent'>, ExternalEmbedContentData>
  | SectionBase<Extract<SectionName, 'infoGrid'>, InfoGridData>
  | SectionBase<Extract<SectionName, 'marquee'>, MarqueeSectionData>
  | SectionBase<Extract<SectionName, 'slider'>, SliderData>
  | SectionBase<Extract<SectionName, 'slide'>, SlideData>
  | SectionBase<Extract<SectionName, 'socialLink'>, SocialLinkData>
  | SectionBase<Extract<SectionName, 'link'>, LinkData>;

export type PageResponseSections = CoursePageResponse['items'][0]['fields']['sections'];
