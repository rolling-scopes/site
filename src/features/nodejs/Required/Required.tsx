import { Paragraph, Subtitle, Title } from '@/shared/components';
import './Required.scss';

export const Required = () => {
  return (
    <section className="required container">
      <div className="required content info-wrapper">
        <Title text="What you should know before starting" hasAsterisk />
        <Subtitle text="Required before the start" />
        <Paragraph>
          Solid knowledge of JavaScript, including ES6, is required for this course.
        </Paragraph>
      </div>
    </section>
  );
};
