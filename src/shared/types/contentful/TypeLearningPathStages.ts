import type { TypeLearningPathStageItemSkeleton } from './TypeLearningPathStageItem';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeLearningPathStages'
 * @name TypeLearningPathStagesFields
 * @type {TypeLearningPathStagesFields}
 * @memberof TypeLearningPathStages
 */
export interface TypeLearningPathStagesFields {
  /**
     * Field type definition for field 'title' (title)
     * @name title
     * @localized true
     */
  title: EntryFieldTypes.Symbol;
  /**
     * Field type definition for field 'description' (description)
     * @name description
     * @localized true
     */
  description?: EntryFieldTypes.RichText;
  /**
     * Field type definition for field 'stages' (stages)
     * @name stages
     * @localized true
     */
  stages: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLearningPathStageItemSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'learningPathStages' (Learning Path Stages)
 * @name TypeLearningPathStagesSkeleton
 * @type {TypeLearningPathStagesSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-18T20:20:28.432Z
 * @version 3
 */
export type TypeLearningPathStagesSkeleton = EntrySkeletonType<TypeLearningPathStagesFields, 'learningPathStages'>;
/**
 * Entry type definition for content type 'learningPathStages' (Learning Path Stages)
 * @name TypeLearningPathStages
 * @type {TypeLearningPathStages}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-18T20:20:28.432Z
 * @version 3
 */
export type TypeLearningPathStages<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLearningPathStagesSkeleton, Modifiers, Locales>;
export type TypeLearningPathStagesWithoutLinkResolutionResponse = TypeLearningPathStages<'WITHOUT_LINK_RESOLUTION'>;
export type TypeLearningPathStagesWithoutUnresolvableLinksResponse = TypeLearningPathStages<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeLearningPathStagesWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLearningPathStages<'WITH_ALL_LOCALES', Locales>;
export type TypeLearningPathStagesWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeLearningPathStages<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeLearningPathStagesWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeLearningPathStages<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
