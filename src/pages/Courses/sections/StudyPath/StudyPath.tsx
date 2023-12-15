import { Paragraph, Title } from '../../../../components';
import HTMLIcon from '../../../../assets/icons/HTML.png';
import JSIcon from '../../../../assets/icons/JavaScript.png';
import ReactAngIcon from '../../../../assets/icons/ReactAngular.svg';
import NodeJSIcon from '../../../../assets/icons/Nodejs.png';
import AWSFundamentalsIcon from '../../../../assets/icons/AWSFundamentals.png';
import AWSDeveloperIcon from '../../../../assets/icons/AWSDeveloper.png';

import './StudyPath.scss';
type CoursesList = {
  id: number;
  title: string;
  description: string;
  logoIcon: string;
  links: {
    linkTitle: string;
    href: string;
    isActive?: boolean;
  }[];
};

const coursesList: CoursesList[] = [
  {
    id: 1,
    title: 'Pre-school',
    description:
      'For those brand new to coding, this is your starting point. Get acquainted with the basics and build a strong foundation.',
    logoIcon: HTMLIcon,
    links: [
      {
        linkTitle: 'Pre-school upturn',
        href: 'https://rs.school/js-stage0/',
        isActive: false
      }
    ]
  },
  {
    id: 2,
    title: 'JS/TS/FE Fundamentals',
    description:
      'Dive deep into the world of JavaScript, TypeScript, and Frontend development. Understand the core concepts and set yourself up for success.',
    logoIcon: JSIcon,
    links: [
      {
        linkTitle: 'JS/TS/FE Fundamentals (RU) invert',
        href: 'https://rs.school/js/'
      },
      {
        linkTitle: 'JS/TS/FE Fundamentals (EN) invert',
        href: 'https://rs.school/js-en/'
      }
    ]
  },
  {
    id: 3,
    title: 'React or Angular',
    description:
      "Choose your framework and become proficient. Whether you're Team React or Team Angular, we ensure you become an expert",
    logoIcon: ReactAngIcon,
    links: [
      {
        linkTitle: 'React invert',
        href: 'https://rs.school/react/'
      }
    ]
  },
  {
    id: 4,
    title: 'NodeJS',
    description:
      "Grasp the power of backend development. With Nodejs, you'll learn to build robust and scalable applications",
    logoIcon: NodeJSIcon,
    links: [
      {
        linkTitle: 'Node invert',
        href: 'https://rs.school/nodejs/'
      }
    ]
  },
  {
    id: 5,
    title: 'AWS Fundamentals',
    description:
      'Delve into the cloud with Amazon Web Services. Understand the essentials and ensure your apps are hosted seamlessly.',
    logoIcon: AWSFundamentalsIcon,
    links: [
      {
        linkTitle: 'AWS Fundamentals invert',
        href: 'https://rs.school/aws-fundamentals/'
      }
    ]
  },
  {
    id: 6,
    title: 'AWS Developer',
    description:
      'Go beyond the basics. Become an AWS pro and unlock the potential of cloud development.',
    logoIcon: AWSDeveloperIcon,
    links: [
      {
        linkTitle: 'AWS Developer invert',
        href: 'https://wearecommunity.io/events/aws-cloud-dev-rs2023q4'
      }
    ]
  }
];
const StudyPath = () => {
  return (
    <section className="study-path container">
      <div className="study-path content">
        <Title text="Choose what you want to learn" hasAsterisk />
        <Paragraph>
          A full-stack developer is someone who has expertise in both frontend (what users see) and
          backend (server and database) development. This dual skill set enables them to supervise
          and implement projects from start to finish. Businesses today prioritize hiring full-stack
          developers because they can efficiently bridge various technological aspects, resulting in
          faster product development.
        </Paragraph>
        <div className="stages">
          {coursesList.map(({ id, title, description, logoIcon, links }) => (
            <div key={id} className="stage">
              <div className="stage-step">
                <span className="stage-number">{id}</span>
                <div className="stage-line" />
              </div>
              <div className="stage-info">
                <h2 className="stage-title">{title}</h2>
                <p className="stage-description">{description}</p>
                <p className="stage-links">
                  {links.map(({ href, linkTitle, isActive = true }) => (
                    <a
                      href={href}
                      key={linkTitle}
                      className={`${isActive || 'disabled'}`}
                      target="blank">
                      {linkTitle}
                    </a>
                  ))}
                </p>
              </div>
              <div className="stage-logo">
                <img src={logoIcon} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyPath;
