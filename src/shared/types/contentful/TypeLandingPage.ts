import type { TypeAboutCourseSkeleton } from './TypeAboutCourse';
import type { TypeDonationSkeleton } from './TypeDonation';
import type { TypeHeroSectionSkeleton } from './TypeHeroSection';
import type { TypeInfoGridSkeleton } from './TypeInfoGrid';
import type { TypeLearningPathStagesSkeleton } from './TypeLearningPathStages';
import type { TypeMarqueeSkeleton } from './TypeMarquee';
import type { TypeMediaGridSkeleton } from './TypeMediaGrid';
import type { TypeMediaTextBlockSkeleton } from './TypeMediaTextBlock';
import type { TypeSliderSkeleton } from './TypeSlider';
import type { TypeUpcomingCoursesSkeleton } from './TypeUpcomingCourses';
import type { TypeVideoBlockSkeleton } from './TypeVideoBlock';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeLandingPage'
 * @name TypeLandingPageFields
 * @type {TypeLandingPageFields}
 * @memberof TypeLandingPage
 */
export interface TypeLandingPageFields {
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
      | TypeDonationSkeleton
      | TypeHeroSectionSkeleton
      | TypeInfoGridSkeleton
      | TypeLearningPathStagesSkeleton
      | TypeMarqueeSkeleton
      | TypeMediaGridSkeleton
      | TypeMediaTextBlockSkeleton
      | TypeSliderSkeleton
      | TypeUpcomingCoursesSkeleton
      | TypeVideoBlockSkeleton
    >
  >;
}

/**
 * Entry skeleton type definition for content type 'landingPage' (Landing Page)
 * @name TypeLandingPageSkeleton
 * @type {TypeLandingPageSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-09T19:17:23.117Z
 * @version 25
 */
export type TypeLandingPageSkeleton = EntrySkeletonType<TypeLandingPageFields, 'landingPage'>;
/**
 * Entry type definition for content type 'landingPage' (Landing Page)
 * @name TypeLandingPage
 * @type {TypeLandingPage}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-07-09T19:17:23.117Z
 * @version 25
 */
export type TypeLandingPage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeLandingPageSkeleton, Modifiers, Locales>;
export type TypeLandingPageWithoutLinkResolutionResponse =
  TypeLandingPage<'WITHOUT_LINK_RESOLUTION'>;
export type TypeLandingPageWithoutUnresolvableLinksResponse =
  TypeLandingPage<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeLandingPageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeLandingPage<'WITH_ALL_LOCALES', Locales>;
export type TypeLandingPageWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeLandingPage<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeLandingPageWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeLandingPage<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
