import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './section-label.module.scss';

type SectionLabelProps = HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof sectionLabelVariants> & { children: string };

export const cx = classNames.bind(styles);

const sectionLabelVariants = cva(cx('label'));

export const SectionLabel = ({ children, className, ...props }: SectionLabelProps) => {
  return (
    <p {...props} className={sectionLabelVariants({ className })}>
      {children}
    </p>
  );
};
