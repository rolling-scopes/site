import classnames from 'classnames/bind';

import { ActivityCard } from '../activity-card/activity-card';
import { WidgetTitle } from '@/shared/ui/widget-title';
import type { MentorActivity } from 'data';

import styles from './mentor-activities.module.scss';

const cx = classnames.bind(styles);

type MentorActivitiesProps = {
  activitiesTitle: string;
  activities: MentorActivity[];
};

export const MentorActivities = ({ activitiesTitle, activities }: MentorActivitiesProps) => {
  return (
    <section className={cx('mentor-activities', 'container')}>
      <div className={cx('content')}>
        <WidgetTitle mods="asterisk">
          {activitiesTitle}
        </WidgetTitle>
        <div className={cx('activity-cards')} data-testid="activity-cards-container">
          {activities.map(({ id, title, description, icon, links }) => (
            <ActivityCard
              key={id}
              description={description}
              icon={icon}
              title={title}
              links={links}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
