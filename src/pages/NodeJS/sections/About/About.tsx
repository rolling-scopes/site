import { AboutGridLayout, Button, Title } from '../../../../components';
import personIcon from '../../../../assets/icons/personIcon.png';
import noteIcon from '../../../../assets/icons/noteIcon.png';
import paperIcon from '../../../../assets/icons/paperIcon.png';
import awardIcon from '../../../../assets/icons/awardIcon.png';
import chatIcon from '../../../../assets/icons/chatIcon.png';
import './About.scss';

const nodejsCourseInfo = [
  {
    id: 1,
    title: 'For everyone',
    info: 'Everyone can study at RS School, regardless of age, professional employment, or place of residence. However, you should have sufficient base knowledge before the program begins.The RS School is working by the principle of "Pay it forward". Members of our community share their knowledge and check students\' tasks for free. And we hope that our students will continue this work as our mentors in the future.',
    icon: personIcon
  },
  {
    id: 2,
    title: 'Materials',
    info: 'Everyone can study at RS School, regardless of age, professional employment, or place of residence. However, you should have sufficient base knowledge before the program begins.',
    icon: paperIcon
  },
  {
    id: 3,
    title: 'Schedule',
    info: 'Twice a week in the evenings.Duration: 9 weeks.Types of training: webinars.',
    icon: noteIcon
  },
  {
    id: 4,
    title: 'Certificate',
    info: 'After accomplishing all three stages of education, students will receive an electronic certificate of completion.',
    icon: awardIcon
  },
  {
    id: 5,
    title: 'Chat',
    info: 'Open chat for applicants and students on Discord.',
    icon: chatIcon
  }
];

export const About = () => {
  return (
    <section className="nodejs-about container">
      <div className="nodejs-about content">
        <Title text="About" />
        <AboutGridLayout items={nodejsCourseInfo} hasTitle />
        <Button label="Become a student" href="https://wearecommunity.io/events/nodejs-rs-2024q1" />
      </div>
    </section>
  );
};
