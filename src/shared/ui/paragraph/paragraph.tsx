import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './paragraph.module.scss';

type ParagraphProps = Pick<HTMLAttributes<HTMLParagraphElement>, 'className' | 'children'> &
  VariantProps<typeof paragraphVariants>;

export const cx = classNames.bind(styles);

const paragraphVariants = cva(cx('paragraph'), {
  variants: {
    size: {
      small: cx('small'),
      medium: cx('medium'),
    },
  },
  defaultVariants: { size: 'medium' },
});

export const Paragraph = ({ children, size, className }: ParagraphProps) => {
  return (
    <p
      className={paragraphVariants({
        size,
        className,
      })}
      data-testid="my-paragraph"
    >
      {children}
    </p>
  );
};
