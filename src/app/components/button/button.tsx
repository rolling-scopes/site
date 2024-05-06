import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Arrow } from '@/icons/btn-arrow';

import styles from './button.module.scss';

type ButtonProps = {
  label: string;
  href: string;
  arrow?: boolean;
  outlined?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'black' | 'white';
  regular?: boolean;
  rounded?: boolean;
  arrowSize?: number;
};

export const Button = ({
  label,
  href,
  arrow = true,
  outlined = false,
  size = 'large',
  color = 'white',
  regular = false,
  rounded = false,
  arrowSize = 24,
}: ButtonProps) => {
  const btnClass = classNames({
    [styles.button]: true,
    [styles.outlined]: outlined,
    [styles.colored]: !outlined,
    [styles.text]: arrow,
    [styles.regular]: regular,
    [styles[size]]: true,
    [styles.rounded]: rounded,
  });

  return (
    <Link className={btnClass} to={href} rel="noreferrer">
      {label}
      {arrow && (
        <span className={styles.arrow}>
          <Arrow color={color} size={arrowSize} />
        </span>
      )}
    </Link>
  );
};
