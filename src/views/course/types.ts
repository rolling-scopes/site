import { CoursePageResponse } from '@/entities/course/types';
import {
  TypeAboutCourseWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeLearningPathStagesWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse,
  TypeVideoBlockWithAllLocalesAndWithoutLinkResolutionResponse,
} from '@/shared/types/contentful';
import { ExtractSectionName } from '@/shared/types/types';
import { AboutCourseSectionData } from '@/widgets/about-course';
import { LearningPathStagesSectionData } from '@/widgets/learning-path-stages';
import { MediaTextBlockSectionData } from '@/widgets/media-text-block';
import { VideoBlockSectionData } from '@/widgets/video-block';

export type SectionName =
  | ExtractSectionName<TypeAboutCourseWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeLearningPathStagesWithAllLocalesAndWithoutLinkResolutionResponse>
  | ExtractSectionName<TypeVideoBlockWithAllLocalesAndWithoutLinkResolutionResponse>;

export type Section =
  | {
    id: string;
    name: Extract<SectionName, 'aboutCourse'>;
    data: AboutCourseSectionData;
  }
  | {
    id: string;
    name: Extract<SectionName, 'mediaTextBlock'>;
    data: MediaTextBlockSectionData;
  }
  | {
    id: string;
    name: Extract<SectionName, 'learningPathStages'>;
    data: LearningPathStagesSectionData;
  }
  | {
    id: string;
    name: Extract<SectionName, 'videoBlock'>;
    data: VideoBlockSectionData;
  };

export type ApiCoursePageResponseSections = CoursePageResponse['items'][0]['fields']['sections'];
