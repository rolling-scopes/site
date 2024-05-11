import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LinkArrowIcon } from '@/icons';

import styles from './link-custom.module.scss';

type LinkCustomProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  label: string;
  href: string;
  size?: 'small' | 'medium' | 'large';
  outlined?: boolean;
  rounded?: boolean;
  arrow?: boolean;
  arrowSize?: number;
  arrowColor?: 'black' | 'white';
  textRegular?: boolean;
  className?: string;
};

export const LinkCustom = ({
  label,
  href,
  size = 'large',
  outlined = false,
  rounded = false,
  arrow = true,
  arrowSize = 24,
  arrowColor = 'white',
  textRegular = false,
  className = '',
  ...props
}: LinkCustomProps) => {
  const btnClass = classNames(styles.button, styles[size], `stroke:${arrowColor}`, {
    [styles.outlined]: outlined,
    [styles.colored]: !outlined,
    [styles.text]: !arrow,
    [styles.regular]: textRegular,
    [styles.rounded]: rounded,
  });

  return (
    <Link className={classNames(btnClass, className)} to={href} {...props} rel="noreferrer">
      {label}
      {arrow && (
        <span className={styles.arrow}>
          <LinkArrowIcon sizes={`${arrowSize}`} />
        </span>
      )}
    </Link>
  );
};
