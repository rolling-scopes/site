import { List } from '@/shared/ui/list';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './general.scss';

const materials = [
  [
    {
      id: 0,
      text: '',
      title: 'School documentation',
      link: 'https://docs.rs.school',
    },
  ],
  'All materials are publicly available on YouTube and GitHub',
  'We also suggest that you familiarize yourself with the summary of the first stage of training.',
];

export const General = () => {
  return (
    <section className="general container">
      <div className="general content">
        <WidgetTitle size="small">General</WidgetTitle>
        <div className="general-info">
          <div className="materials">
            <h2 className="title">Materials</h2>
            <List data={materials} />
          </div>
          <div className="certificate">
            <h2 className="title">Certificate</h2>
            <p className="description">
              A certificate of successful completion of the course is issued to all who have passed
              the two stages of training.
            </p>
          </div>
          <div className="chat">
            <h2 className="title">Chat</h2>
            <p className="description">
              Open chat for applicants and students on Discord, Telegram and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
