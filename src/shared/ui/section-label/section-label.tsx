import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './section-label.module.scss';

type SectionLabelProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof sectionLabelVariants> & { label: string };

export const cx = classNames.bind(styles);

const sectionLabelVariants = cva(cx('label'), {
  variants: {
    marginSize: {
      small: cx('margin-small'),
      medium: cx('margin-medium'),
      large: cx('margin-large'),
    },
    fontSize: {
      small: cx('font-small'),
      large: cx('font-large'),
    },
  },
  defaultVariants: {
    marginSize: 'large',
    fontSize: 'large',
  },
});

export const SectionLabel = ({
  label,
  marginSize,
  fontSize,
  className,
  ...props
}: SectionLabelProps) => {
  return (
    <div
      {...props}
      className={sectionLabelVariants({
        marginSize,
        fontSize,
        className,
      })}
    >
      {label}
    </div>
  );
};
