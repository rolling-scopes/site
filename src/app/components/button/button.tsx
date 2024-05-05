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
  let btnClass = `${styles.button} ${outlined ? styles.outlined : styles.colored}`;
  btnClass += ` ${arrow ? '' : styles['text']}`;
  btnClass += ` ${regular ? styles['regular'] : ''}`;
  btnClass += ` ${styles[size]}`;
  btnClass += ` ${rounded ? styles.rounded : ''}`;

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
