import { Fragment } from 'react/jsx-runtime';
import { Point } from '@/features/required/required.types';

import './clickable-text.scss';

interface ClickableTextProps {
  data: Point;
}

export const ClickableText = ({ data }: ClickableTextProps) => {
  return data.map((item, index) => (
    <Fragment key={index}>
      {item.text && <span>{item.text}</span>}
      <a className="required-link" href={item.link}>
        {item.title}
      </a>
    </Fragment>
  ));
};
