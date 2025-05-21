import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeLearningPathStageItem'
 * @name TypeLearningPathStageItemFields
 * @type {TypeLearningPathStageItemFields}
 * @memberof TypeLearningPathStageItem
 */
export interface TypeLearningPathStageItemFields {
  /**
     * Field type definition for field 'title' (title)
     * @name title
     * @localized true
     */
  title: EntryFieldTypes.Symbol;
  /**
     * Field type definition for field 'content' (content)
     * @name content
     * @localized true
     */
  content: EntryFieldTypes.RichText;
  /**
     * Field type definition for field 'image' (image)
     * @name image
     * @localized true
     */
  image?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'learningPathStageItem' (Learning Path Stage Item)
 * @name TypeLearningPathStageItemSkeleton
 * @type {TypeLearningPathStageItemSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-18T20:24:48.422Z
 * @version 1
 */
export type TypeLearningPathStageItemSkeleton = EntrySkeletonType<TypeLearningPathStageItemFields, 'learningPathStageItem'>;
/**
 * Entry type definition for content type 'learningPathStageItem' (Learning Path Stage Item)
 * @name TypeLearningPathStageItem
 * @type {TypeLearningPathStageItem}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-18T20:24:48.422Z
 * @version 1
 */
export type TypeLearningPathStageItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLearningPathStageItemSkeleton, Modifiers, Locales>;
export type TypeLearningPathStageItemWithoutLinkResolutionResponse = TypeLearningPathStageItem<'WITHOUT_LINK_RESOLUTION'>;
export type TypeLearningPathStageItemWithoutUnresolvableLinksResponse = TypeLearningPathStageItem<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeLearningPathStageItemWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLearningPathStageItem<'WITH_ALL_LOCALES', Locales>;
export type TypeLearningPathStageItemWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeLearningPathStageItem<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeLearningPathStageItemWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeLearningPathStageItem<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
