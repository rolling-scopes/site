import { Breadcrumbs } from '@/widgets';
import './Audience.scss';
import audienceImg from '@/assets/nodejs-audience.png';
import { Button, Paragraph, Title } from '@/shared/components';

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'RS School', path: '/rs-courses' },
  { label: 'Node.js course', path: '/nodejs-course' }
];

const topics = [
  'Node.js basics',
  'Network communication.',
  'HTTP & WebSockets',
  'Testing of Node.js application',
  'WebAPI: REST & GraphQL',
  'DB: SQL, PostgreSQL',
  'Containerization, DockerLogging and Error Handling',
  'Authentication & authorization, JWTNest.js'
];

export const Audience = () => {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <section className="nodejs-audience container">
        <div className="nodejs-audience content column-2">
          <div className="left">
            <Title hasAsterisk text="Course Topics" />
            <Paragraph>
              This course is designed for JavaScript / Front-End developers who want to get
              acquainted with Node.js and the server side of web application development.
            </Paragraph>
            <Paragraph>
              The course consists of weekly assignments that you can complete at your own pace,
              followed by a test that will help you evaluate your understanding of the materials.
            </Paragraph>

            <ul className="topics">
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <Button label="Register" href="https://wearecommunity.io/events/nodejs-rs-2024q1" />
          </div>
          <div className="right">
            <img src={audienceImg} alt="nodejs-audience" />
          </div>
        </div>
      </section>
    </>
  );
};
