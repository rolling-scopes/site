import { faqData } from './faq.data';
import { TextWithLink, Title } from '@/app/components';

import './faq.scss';

export const Faq = () => {
  return (
    <section className="faq container">
      <div className="content info-wrapper">
        <Title text={'FAQ'} hasAsterisk />
        <ol className="list">
          {faqData.map(({ question, answer }, index) => (
            <li className="list-item" key={question}>
              <span className="question marked">
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
