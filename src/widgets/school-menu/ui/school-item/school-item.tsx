import { HTMLProps, RefObject } from 'react';
import classNames from 'classnames/bind';
import Image, { StaticImageData } from 'next/image';

import { LinkCustom } from '@/shared/ui/link-custom';
import { Color } from '@/widgets/school-menu/types';

import styles from './school-item.module.scss';

const cx = classNames.bind(styles);

type SchoolItemProps = HTMLProps<HTMLLIElement> & {
  activeItemRef?: RefObject<HTMLAnchorElement | null>;
  color?: Color;
  description?: string;
  external?: boolean;
  icon?: StaticImageData;
  preserveLang?: boolean;
  title: string;
  url: string;
};

export const SchoolItem = ({
  activeItemRef,
  color = 'dark',
  description,
  external = false,
  icon,
  preserveLang = true,
  title,
  url,
  ...props
}: SchoolItemProps) => {
  const isNonClickable = Boolean(url === '#');

  return (
    <li {...props} className={cx(props.className)} style={{ width: '250px' }}>
      <LinkCustom
        className={cx(
          'school-item',
          { 'non-clickable': isNonClickable },
          { centered: !description },
        )}
        external={external}
        href={url}
        iconRight={null}
        preserveLang={preserveLang}
        ref={activeItemRef}
        tabIndex={isNonClickable ? -1 : 0}
      >
        {icon && (
          <Image
            src={icon}
            alt=""
            width={32}
            height={32}
            aria-hidden="true"
            data-testid="school-item-icon"
          />
        )}
        <div className={cx('description-wrapper')}>
          <span className={cx('title', color)}>{title}</span>
          {description && (
            <small className={cx('description')} data-testid="school-item-description">
              {description}
            </small>
          )}
        </div>
      </LinkCustom>
    </li>
  );
};
