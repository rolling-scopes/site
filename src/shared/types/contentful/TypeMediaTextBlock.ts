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
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   * @summary This tag field is used internally only in contenful to unique identify identical content. THIS FIELD WILL NOT BE SHOWN ON THE WEBSITE
   */
  tag?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'sectionLabel' (sectionLabel)
   * @name sectionLabel
   * @localized true
   */
  sectionLabel?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'title' (title)
   * @name title
   * @localized true
   */
  title?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'titleSize' (titleSize)
   * @name titleSize
   * @localized false
   * @summary 0 – 'Smallest'. 1 – 'Small'. 2 – 'Medium'. 3 – 'Large'. By default is set to 2 (Medium)
   */
  titleSize?: EntryFieldTypes.Integer<0 | 1 | 2 | 3>;
  /**
   * Field type definition for field 'titleMod' (titleMod)
   * @name titleMod
   * @localized false
   * @summary The title modification such as || or *. 0 - *, 1 - ||, 2 - empty. By default is set to empty
   */
  titleMod?: EntryFieldTypes.Integer<0 | 1 | 2>;
  /**
   * Field type definition for field 'contentLeft' (contentLeft)
   * @name contentLeft
   * @localized true
   */
  contentLeft?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'contentRight' (contentRight)
   * @name contentRight
   * @localized true
   */
  contentRight?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'contentBottom' (contentBottom)
   * @name contentBottom
   * @localized true
   */
  contentBottom?: EntryFieldTypes.RichText;
  /**
   * Field type definition for field 'linkUrl' (linkUrl)
   * @name linkUrl
   * @localized false
   * @summary If no link is provided the course related link to the registration page will be used as a default value
   */
  linkUrl?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'linkLabel' (linkLabel)
   * @name linkLabel
   * @localized true
   */
  linkLabel?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'disabledLinkLabel' (disabledLinkLabel)
   * @name disabledLinkLabel
   * @localized true
   */
  disabledLinkLabel?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'backgroundColor' (backgroundColor)
   * @name backgroundColor
   * @localized false
   */
  backgroundColor?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'settings' (settings)
   * @name settings
   * @localized false
   */
  settings?: EntryFieldTypes.Object;
}

/**
 * Entry skeleton type definition for content type 'mediaTextBlock' (Media Text Block)
 * @name TypeMediaTextBlockSkeleton
 * @type {TypeMediaTextBlockSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-05-18T14:21:33.812Z
 * @version 83
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
 * @version 83
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
