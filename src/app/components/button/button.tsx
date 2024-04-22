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
  arrowSize = 24,
}: ButtonProps) => {
  let btnClass = `${styles.button} ${outlined ? styles.outlined : styles.colored}`;
  btnClass += ` ${arrow ? '' : styles['without-arrow']}`;
  btnClass += ` ${styles[size]}`;

  return (
    <a className={btnClass} href={href} rel="noreferrer">
      <span className={`${styles.label} ${regular ? styles['regular'] : ''}`}>{label}</span>
      {arrow && (
        <span className={styles.arrow}>
          <Arrow color={color} size={arrowSize} />
        </span>
      )}
    </a>
  );
};
