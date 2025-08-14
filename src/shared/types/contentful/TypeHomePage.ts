import type { TypeAboutCourseSkeleton } from './TypeAboutCourse';
import type { TypeCourseSkeleton } from './TypeCourse';
import type { TypeLearningPathStagesSkeleton } from './TypeLearningPathStages';
import type { TypeMediaTextBlockSkeleton } from './TypeMediaTextBlock';
import type { TypeVideoBlockSkeleton } from './TypeVideoBlock';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeHomePage'
 * @name TypeHomePageFields
 * @type {TypeHomePageFields}
 * @memberof TypeHomePage
 */
export interface TypeHomePageFields {
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized false
   * @summary The title will be used in metadata title (shown in a browser's title bar)
   */
  title: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'slug' (slug)
   * @name slug
   * @localized false
   * @summary The slug that will be used in the url bar
   */
  slug: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'seoDescription' (SEO Description)
   * @name SEO Description
   * @localized false
   * @summary Enter a description of the page using sentence casing, remaining between 100 and 150 characters. The format should include the page's topic and value proposition (if relevant), followed by a call-to-action
   */
  seoDescription: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'seoKeywords' (SEO Keywords)
   * @name SEO Keywords
   * @localized false
   */
  seoKeywords: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'sections' (sections)
   * @name sections
   * @localized true
   */
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeAboutCourseSkeleton
      | TypeLearningPathStagesSkeleton
      | TypeMediaTextBlockSkeleton
      | TypeVideoBlockSkeleton
    >
  >;
  /**
   * Field type definition for field 'course' (course)
   * @name course
   * @localized true
   */
  course: EntryFieldTypes.EntryLink<TypeCourseSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'homePage' (Course Page)
 * @name TypeHomePageSkeleton
 * @type {TypeHomePageSkeleton}
 * @author 7eBAEG99Zg1EDoAM5bOSWX
 * @since 2025-03-27T06:29:32.332Z
 * @version 69
 */
export type TypeHomePageSkeleton = EntrySkeletonType<TypeHomePageFields, 'homePage'>;
/**
 * Entry type definition for content type 'homePage' (Course Page)
 * @name TypeHomePage
 * @type {TypeHomePage}
 * @author 7eBAEG99Zg1EDoAM5bOSWX
 * @since 2025-03-27T06:29:32.332Z
 * @version 69
 */
export type TypeHomePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeHomePageSkeleton, Modifiers, Locales>;
export type TypeHomePageWithoutLinkResolutionResponse = TypeHomePage<'WITHOUT_LINK_RESOLUTION'>;
export type TypeHomePageWithoutUnresolvableLinksResponse =
  TypeHomePage<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeHomePageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeHomePage<'WITH_ALL_LOCALES', Locales>;
export type TypeHomePageWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeHomePage<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeHomePageWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeHomePage<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
