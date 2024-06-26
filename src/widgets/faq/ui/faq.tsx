/* eslint-disable @stylistic/jsx-one-expression-per-line */
import classNames from 'classnames/bind';
import { faqData } from '../faq.data';
import { TextWithLink } from '@/shared/ui/text-with-link';
import { WidgetTitle } from '@/shared/ui/widget-title/widget-title';

import styles from './faq.module.scss';

const cx = classNames.bind(styles);

export const Faq = () => {
  return (
    <section className={cx('faq', 'container')}>
      <div className={cx('content', 'info-wrapper')}>
        <WidgetTitle size="medium" mods="asterisk">FAQ</WidgetTitle>
        <ol className={cx('list')}>
          {faqData.map(({ question, answer }, index) => (
            <li className={cx('list-item')} key={question}>
              <span className={cx('question', 'marked')}>
                {index + 1}. {question}
              </span>
              {typeof answer === 'string' ? <span>{answer}</span> : <TextWithLink data={answer} />}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
