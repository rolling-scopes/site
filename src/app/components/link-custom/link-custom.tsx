import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ArrowIcon } from '@/icons';

import styles from './link-custom.module.scss';

type LinkCustomProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href: string;
  size?: 'large' | 'medium' | 'small';
  outlined?: boolean;
  rounded?: boolean;
  icon?: boolean;
  invertIconColor?: boolean;
  className?: string;
};

export const LinkCustom = ({
  children,
  href,
  size = 'large',
  outlined = false,
  rounded = false,
  icon = true,
  invertIconColor = false,
  className = '',
  ...props
}: LinkCustomProps) => {
  const cx = classNames.bind(styles);

  const linkClassName = cx('button', [size], outlined ? 'outlined' : 'colored', {
    rounded,
  });

  return (
    <Link className={cx(linkClassName, className)} to={href} {...props} rel="noreferrer">
      {children}
      {icon && (
        <span className={styles.arrow}>
          <ArrowIcon side={size === 'large' ? '24px' : '16px'} invertIconColor={invertIconColor} />
        </span>
      )}
    </Link>
  );
};
