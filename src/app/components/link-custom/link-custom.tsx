import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ArrowIcon, TextLinkIcon } from '@/icons';

import styles from './link-custom.module.scss';

type LinkCustomProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  icon?: boolean;
  button?: boolean;
  size?: 'large' | 'medium' | 'small';
  outlined?: boolean;
  rounded?: boolean;
  invertIconColor?: boolean;
  className?: string;
};

export const LinkCustom = ({
  children,
  href,
  icon = true,
  button = false,
  size = 'large',
  outlined = false,
  rounded = false,
  invertIconColor = false,
  className = '',
  ...props
}: LinkCustomProps) => {
  const cx = classNames.bind(styles);

  const linkClassName = button
    ? cx('button', [size], outlined ? 'outlined' : 'colored', {
        rounded,
      })
    : 'text-link';

  return (
    <Link className={cx(linkClassName, className)} to={href} {...props} rel="noreferrer">
      {children}
      {icon && (
        <span>
          {button ? (
            <ArrowIcon
              side={size === 'large' ? '24px' : '16px'}
              invertIconColor={invertIconColor}
            />
          ) : (
            <TextLinkIcon />
          )}
        </span>
      )}
    </Link>
  );
};
