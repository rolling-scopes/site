import { HTMLAttributes } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './paragraph.module.scss';

type ParagraphProps = Pick<HTMLAttributes<HTMLParagraphElement>, 'className' | 'children'>
  & VariantProps<typeof paragraphVariants>
  & { dataTestId?: string };

export const cx = classNames.bind(styles);

const paragraphVariants = cva(cx('paragraph'), {
  variants: {
    fontSize: {
      medium: cx('medium-font-size'),
      large: cx('large-font-size'),
      small: cx('small-font-size'),
    },
  },
  defaultVariants: { fontSize: 'medium' },
});

export const Paragraph = ({ children, fontSize, className, dataTestId = 'paragraph' }: ParagraphProps) => {
  return (
    <p
      className={paragraphVariants({
        fontSize,
        className,
      })}
      data-testid={dataTestId}
    >
      {children}
    </p>
  );
};
