import classNames from 'classnames/bind';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './doc-detail.module.scss';

const cx = classNames.bind(styles);

type DocDetailProps = {
  courseTitle?: string;
  textInfo: string;
  textLink: string;
  textAfterLink: string;
  textEnd: string;
  linkDocs: string;
};

export const DocDetail = (props: DocDetailProps) => {
  return (
    <Paragraph className={cx('doc-detail-wrapper')}>
      {`${props.textInfo} `}
      <LinkCustom
        href={props.linkDocs}
        external
      >
        {props.textLink}
      </LinkCustom>
      {` ${props.textAfterLink}${props.courseTitle ? ` ${props.courseTitle}` : ''} ${props.textEnd}`}
    </Paragraph>
  );
};
