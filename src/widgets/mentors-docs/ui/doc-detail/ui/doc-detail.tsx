import classNames from 'classnames/bind';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';

import styles from './doc-detail.module.scss';

const cx = classNames.bind(styles);

type DocDetailProps = {
  textBeforeLink: string;
  textLink: string;
  textAfterLink: string;
  linkDocs?: string;
};

export const DocDetail = (props: DocDetailProps) => {
  if (!props.linkDocs) {
    return null;
  }

  return (
    <Paragraph className={cx('doc-detail-wrapper')}>
      {`${props.textBeforeLink} `}
      <LinkCustom
        href={props.linkDocs}
        external
      >
        {props.textLink}
      </LinkCustom>
      {` ${props.textAfterLink}`}
    </Paragraph>
  );
};
