import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';
import { HTMLAttributes } from 'react';

import styles from './section-label.module.scss';

type SectionLabelProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof sectionLabelVariants>;

export const cx = classNames.bind(styles);

const sectionLabelVariants = cva(cx('label'));

export const SectionLabel = ({ children, className, ...props }: SectionLabelProps) => {
  return (
    <p {...props} className={sectionLabelVariants({ className })}>
      {children}
    </p>
  );
};
