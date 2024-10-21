import classNames from 'classnames/bind';
import { SocialMediaItem, SocialMediaProps } from '@/shared/ui/social-media-item';

import styles from './doc-links.module.scss';

const cx = classNames.bind(styles);

type AdditionalProps = {
  text: string;
  links: SocialMediaProps[];
};

export const DocLinks = ({ text, links }: AdditionalProps) => {
  return (
    <div className={cx('doc-links-wrapper')}>
      {text}
      <div className={cx('doc-links')}>
        {links.map((link, index) => (
          <SocialMediaItem key={index} title={link.title} href={link.href} icon={link.icon} />
        ))}
      </div>
    </div>
  );
};
