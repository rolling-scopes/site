import { type VariantProps, cva } from 'class-variance-authority';
import classnames from 'classnames/bind';

import styles from './info-cell.module.scss';

const cx = classnames.bind(styles);

type InfoCellProps = {
  title: string;
  description: string;
} & VariantProps<typeof titleVariants>
& VariantProps<typeof cardVariants>;

const titleVariants = cva(cx('title'), {
  variants: {
    titleFontSize: {
      medium: cx('medium-font-size'),
      large: cx('large-font-size'),
    },
  },
  defaultVariants: { titleFontSize: 'medium' },
});

const cardVariants = cva(cx('info-cell-wrap'), {
  variants: {
    gap: { withGap: cx('with-gap') },
    size: {
      medium: cx('medium-card-size'),
      large: cx('large-card-size'),
    },
  },
  defaultVariants: { size: 'medium' },
});

export const InfoCell = ({ title, description, titleFontSize, gap, size }: InfoCellProps) => {
  const [firstPart, secondPart] = title.split(' ');

  return (
    <article className={cx('info-cell')}>
      <div
        className={cardVariants({
          gap,
          size,
        })}
      >
        <p className={titleVariants({ titleFontSize })}>
          {firstPart}
          <br />
          {secondPart}
        </p>
        <p className={cx('description')}>{description}</p>
      </div>
    </article>
  );
};
