import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames/bind';

import styles from './main-title.module.scss';

export type MainTitleProps = React.HTMLAttributes<HTMLHeadingElement> & VariantProps<typeof mainTitleVariants>;

const cx = classNames.bind(styles);

export const mainTitleVariants = cva(cx('title'));
