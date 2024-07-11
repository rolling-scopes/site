import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './section-label.module.scss';

type SectionLabelProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof sectionLabelVariants>;

export const cx = classNames.bind(styles);

const sectionLabelVariants = cva(cx('label'));

export const SectionLabel = ({ children, className, ...props }: SectionLabelProps) => {
  return (
    <h4 {...props} className={sectionLabelVariants({ className })}>
      {children}
    </h4>
  );
};
