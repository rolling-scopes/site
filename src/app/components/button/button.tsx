import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Arrow } from '@/icons/btn-arrow';

import styles from './button.module.scss';

type LinkBtnProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  label: string;
  href: string;
  arrow?: boolean;
  outlined?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'black' | 'white';
  regular?: boolean;
  rounded?: boolean;
  arrowSize?: number;
  className?: string;
};

export const LinkBtn = ({
  label,
  href,
  arrow = true,
  outlined = false,
  size = 'large',
  color = 'white',
  regular = false,
  rounded = false,
  className = '',
  arrowSize = 24,
  ...props
}: LinkBtnProps) => {
  const btnClass = classNames(styles.button, styles[size], {
    [styles.outlined]: outlined,
    [styles.colored]: !outlined,
    [styles.text]: !arrow,
    [styles.regular]: regular,
    [styles.rounded]: rounded,
  });

  return (
    <Link className={classNames(btnClass, className)} to={href} {...props} rel="noreferrer">
      {label}
      {arrow && (
        <span className={styles.arrow}>
          <Arrow color={color} size={arrowSize} />
        </span>
      )}
    </Link>
  );
};
