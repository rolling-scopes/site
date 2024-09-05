import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './paragraph.module.scss';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof paragraphVariants>;

export const cx = classNames.bind(styles);

const paragraphVariants = cva(cx('paragraph'), {
  variants: { withTopSpacing: { true: cx('top-spacing') } },
  defaultVariants: { withTopSpacing: false },
});

export const Paragraph = ({ children, withTopSpacing, className }: ParagraphProps) => {
  return (
    <p
      className={paragraphVariants({
        withTopSpacing,
        className,
      })}
      data-testid="paragraph"
    >
      {children}
    </p>
  );
};
