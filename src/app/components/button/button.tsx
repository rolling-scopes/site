import { Arrow } from '@/icons/btn-arrow';

import styles from './button.module.scss';

type ButtonProps = {
  label: string;
  href: string;
  outlined?: boolean;
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({ label, href, outlined = false, size = 'large' }: ButtonProps) => {
  let btnClass = `${styles.button} ${outlined ? styles.outlined : styles.colored}`;
  btnClass += ` ${styles[size]}`;

  return (
    <a className={btnClass} href={href} rel="noreferrer">
      <span className={styles.label}>{label}</span>
      <Arrow color="white" />
    </a>
  );
};
