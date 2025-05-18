import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeMediaTextBlock'
 * @name TypeMediaTextBlockFields
 * @type {TypeMediaTextBlockFields}
 * @memberof TypeMediaTextBlock
 */
export interface TypeMediaTextBlockFields {
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
   * @localized false
   */
  image?: EntryFieldTypes.AssetLink;
  /**
   * Field type definition for field 'imageLayoutPosition' (imageLayoutPosition)
   * @name imageLayoutPosition
   * @localized false
   * @summary The image layout position. Specifies where should the image be displayed – left or right
   */
  imageLayoutPosition: EntryFieldTypes.Boolean;
  /**
   * Field type definition for field 'registrationLinkText' (registrationLinkText)
   * @name registrationLinkText
   * @localized true
   */
  registrationLinkText?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'registrationClosedLinkText' (registrationClosedLinkText)
   * @name registrationClosedLinkText
   * @localized true
   */
  registrationClosedLinkText?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'mediaTextBlock' (Media Text Block)
 * @name TypeMediaTextBlockSkeleton
 * @type {TypeMediaTextBlockSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-18T14:21:33.812Z
 * @version 15
 */
export type TypeMediaTextBlockSkeleton = EntrySkeletonType<
  TypeMediaTextBlockFields,
  'mediaTextBlock'
>;
/**
 * Entry type definition for content type 'mediaTextBlock' (Media Text Block)
 * @name TypeMediaTextBlock
 * @type {TypeMediaTextBlock}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-18T14:21:33.812Z
 * @version 15
 */
export type TypeMediaTextBlock<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeMediaTextBlockSkeleton, Modifiers, Locales>;
export type TypeMediaTextBlockWithoutLinkResolutionResponse =
  TypeMediaTextBlock<'WITHOUT_LINK_RESOLUTION'>;
export type TypeMediaTextBlockWithoutUnresolvableLinksResponse =
  TypeMediaTextBlock<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeMediaTextBlockWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeMediaTextBlock<'WITH_ALL_LOCALES', Locales>;
export type TypeMediaTextBlockWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeMediaTextBlock<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeMediaTextBlockWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeMediaTextBlock<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
