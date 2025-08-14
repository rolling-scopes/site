import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeMarquee'
 * @name TypeMarqueeFields
 * @type {TypeMarqueeFields}
 * @memberof TypeMarquee
 */
export interface TypeMarqueeFields {
  /**
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   * @summary This tag field is used internally only in contenful to unique identify identical content. THIS FIELD WILL NOT BE SHOWN ON THE WEBSITE
   */
  tag?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'marqueeItems' (Marquee items)
   * @name Marquee items
   * @localized false
   */
  marqueeItems: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

/**
 * Entry skeleton type definition for content type 'marquee' (Marquee)
 * @name TypeMarqueeSkeleton
 * @type {TypeMarqueeSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-08T11:26:49.999Z
 * @version 3
 */
export type TypeMarqueeSkeleton = EntrySkeletonType<TypeMarqueeFields, 'marquee'>;
/**
 * Entry type definition for content type 'marquee' (Marquee)
 * @name TypeMarquee
 * @type {TypeMarquee}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-08T11:26:49.999Z
 * @version 3
 */
export type TypeMarquee<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeMarqueeSkeleton, Modifiers, Locales>;
export type TypeMarqueeWithoutLinkResolutionResponse = TypeMarquee<'WITHOUT_LINK_RESOLUTION'>;
export type TypeMarqueeWithoutUnresolvableLinksResponse = TypeMarquee<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeMarqueeWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> =
  TypeMarquee<'WITH_ALL_LOCALES', Locales>;
export type TypeMarqueeWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeMarquee<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeMarqueeWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeMarquee<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
