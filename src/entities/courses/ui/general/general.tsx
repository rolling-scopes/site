import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './general.scss';

export const General = () => {
  return (
    <section className="general container">
      <div className="general content">
        <WidgetTitle size="small">General</WidgetTitle>
        <div className="general-info">
          <div className="materials">
            <h2 className="title">Materials</h2>
            <ul className="description">
              <li>
                <LinkCustom href="https://docs.rs.school" external>
                  School documentation
                </LinkCustom>
              </li>
              <li>All materials are publicly available on YouTube and GitHub</li>
              <li>
                We also suggest that you familiarize yourself with the summary of the first stage of
                training.
              </li>
            </ul>
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
