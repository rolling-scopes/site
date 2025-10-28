import type { TypeCourseSkeleton } from './TypeCourse';
import type { TypeExternalEmbedContentSkeleton } from './TypeExternalEmbedContent';
import type { TypeHeroSectionSkeleton } from './TypeHeroSection';
import type { TypeMarqueeSkeleton } from './TypeMarquee';
import type { TypeMediaTextBlockSkeleton } from './TypeMediaTextBlock';
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypePage'
 * @name TypePageFields
 * @type {TypePageFields}
 * @memberof TypePage
 */
export interface TypePageFields {
  /**
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   */
  tag: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'type' (type)
   * @name type
   * @localized false
   */
  type: EntryFieldTypes.Symbol<
    | 'community'
    | 'course'
    | 'courses'
    | 'docs'
    | 'home'
    | 'mentorship'
    | 'mentorship-course'
    | 'merch'
    | 'not-found'
  >;
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
   * @localized true
   * @summary Enter a description of the page using sentence casing, remaining between 100 and 150 characters. The format should include the page's topic and value proposition (if relevant), followed by a call-to-action
   */
  seoDescription: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'seoKeywords' (SEO Keywords)
   * @name SEO Keywords
   * @localized true
   */
  seoKeywords: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'seoOgImageTitle' (SEO OG Image Title)
   * @name SEO OG Image Title
   * @localized true
   */
  seoOgImageTitle?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'seoOgImageDescription' (SEO OG Image Description)
   * @name SEO OG Image Description
   * @localized true
   */
  seoOgImageDescription?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'sections' (sections)
   * @name sections
   * @localized true
   */
  sections?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeExternalEmbedContentSkeleton
      | TypeHeroSectionSkeleton
      | TypeMarqueeSkeleton
      | TypeMediaTextBlockSkeleton
    >
  >;
  /**
   * Field type definition for field 'course' (course)
   * @name course
   * @localized true
   */
  course?: EntryFieldTypes.EntryLink<TypeCourseSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'page' (Page)
 * @name TypePageSkeleton
 * @type {TypePageSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-09-02T11:58:16.325Z
 * @version 37
 */
export type TypePageSkeleton = EntrySkeletonType<TypePageFields, 'page'>;
/**
 * Entry type definition for content type 'page' (Page)
 * @name TypePage
 * @type {TypePage}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-09-02T11:58:16.325Z
 * @version 37
 */
export type TypePage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePageSkeleton, Modifiers, Locales>;
export type TypePageWithoutLinkResolutionResponse = TypePage<'WITHOUT_LINK_RESOLUTION'>;
export type TypePageWithoutUnresolvableLinksResponse = TypePage<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypePageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePage<
  'WITH_ALL_LOCALES',
  Locales
>;
export type TypePageWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypePage<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypePageWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypePage<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
