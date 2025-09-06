import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

/**
 * Fields type definition for content type 'TypeSlider'
 * @name TypeSliderFields
 * @type {TypeSliderFields}
 * @memberof TypeSlider
 */
export interface TypeSliderFields {
  /**
   * Field type definition for field 'tag' (tag)
   * @name tag
   * @localized false
   * @summary This tag field is used internally only in contenful to unique identify identical content. THIS FIELD WILL NOT BE SHOWN ON THE WEBSITE
   */
  tag?: EntryFieldTypes.Symbol;
  /**
   * Field type definition for field 'slides' (slides)
   * @name slides
   * @localized false
   */
  slides: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'slider' (Slider)
 * @name TypeSliderSkeleton
 * @type {TypeSliderSkeleton}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-09T09:03:18.515Z
 * @version 11
 */
export type TypeSliderSkeleton = EntrySkeletonType<TypeSliderFields, 'slider'>;
/**
 * Entry type definition for content type 'slider' (Slider)
 * @name TypeSlider
 * @type {TypeSlider}
 * @author 1gdRTUbGl7AN0NHL83pCVK
 * @since 2025-08-09T09:03:18.515Z
 * @version 11
 */
export type TypeSlider<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSliderSkeleton, Modifiers, Locales>;
export type TypeSliderWithoutLinkResolutionResponse = TypeSlider<'WITHOUT_LINK_RESOLUTION'>;
export type TypeSliderWithoutUnresolvableLinksResponse = TypeSlider<'WITHOUT_UNRESOLVABLE_LINKS'>;
export type TypeSliderWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSlider<
  'WITH_ALL_LOCALES',
  Locales
>;
export type TypeSliderWithAllLocalesAndWithoutLinkResolutionResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSlider<'WITHOUT_LINK_RESOLUTION' | 'WITH_ALL_LOCALES', Locales>;
export type TypeSliderWithAllLocalesAndWithoutUnresolvableLinksResponse<
  Locales extends LocaleCode = LocaleCode,
> = TypeSlider<'WITHOUT_UNRESOLVABLE_LINKS' | 'WITH_ALL_LOCALES', Locales>;
