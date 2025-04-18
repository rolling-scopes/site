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
   * Field type definition for field 'subtitle' (Subtitle)
   * @name Subtitle
   * @localized false
   */
  subtitle?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'mainTitle' (MainTitle)
   * @name MainTitle
   * @localized false
   */
  mainTitle?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'widgetTitle' (WidgetTitle)
   * @name WidgetTitle
   * @localized false
   */
  widgetTitle?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'image' (Image)
   * @name Image
   * @localized false
   */
  image?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'homePage' (Home Page)
 * @name TypeHomePageSkeleton
 * @type {TypeHomePageSkeleton}
 * @author 7eBAEG99Zg1EDoAM5bOSWX
 * @since 2025-03-27T06:29:32.332Z
 * @version 1
 */
export type TypeHomePageSkeleton = EntrySkeletonType<TypeHomePageFields, 'homePage'>;
/**
 * Entry type definition for content type 'homePage' (Home Page)
 * @name TypeHomePage
 * @type {TypeHomePage}
 * @author 7eBAEG99Zg1EDoAM5bOSWX
 * @since 2025-03-27T06:29:32.332Z
 * @version 1
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
