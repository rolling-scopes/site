/* eslint-disable @stylistic/jsx-one-expression-per-line */
import classNames from 'classnames/bind';

import { FaqData } from '../types';
import { TextWithLink } from '@/shared/ui/text-with-link';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './faq.module.scss';

const cx = classNames.bind(styles);

type FaqProps = {
  faqData: FaqData;
};

export const Faq = ({ faqData }: FaqProps) => {
  return (
    <section className={cx('faq', 'container')} data-testid="faq">
      <div className={cx('content', 'info-wrapper')}>
        <WidgetTitle mods="asterisk">FAQ</WidgetTitle>
        <ol className={cx('list')} data-testid="faq-list">
          {faqData.map(({ question, answer }, index) => (
            <li className={cx('list-item')} key={question}>
              <span className={cx('question', 'marked')} data-testid="faq-question">
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
