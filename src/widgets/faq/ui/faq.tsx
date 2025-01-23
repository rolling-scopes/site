/* eslint-disable @stylistic/jsx-one-expression-per-line */
import classNames from 'classnames/bind';

import { TextWithLink } from '@/shared/ui/text-with-link';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { FaqDataType } from 'data';

import styles from './faq.module.scss';

const cx = classNames.bind(styles);

type FaqProps = {
  questions: FaqDataType[];
};

export const Faq = ({ questions }: FaqProps) => {
  return (
    <section className={cx('faq', 'container')}>
      <div className={cx('content', 'info-wrapper')}>
        <WidgetTitle mods="asterisk">FAQ</WidgetTitle>
        <ol className={cx('list')}>
          {questions.map(({ question, answer }, index) => (
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
