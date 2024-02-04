import { Breadcrumbs, Button, Paragraph, Subtitle, Title } from '@/app/components';
import jsImg from '@/assets/js-rs-slope.png';
import awsDevImg from '@/assets/rs-slope-aws-dev.png';
import awsFundamentalsImg from '@/assets/rs-slope-aws-fundamentals.png';
import angularImg from '@/assets/rs-slope-angular.png';
import './training-program.scss';
import { ImageType, TrainingProgramProps } from './training-program.types';
import { useCourseByTitle } from '@/app/hooks';
import { Course } from '@/app/types';

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'RS School', path: '/rs-courses' },
  { label: 'JavaScript course', path: '/javascript-course' }
];

const imageType: ImageType = {
  awsDev: awsDevImg,
  awsFundamentals: awsFundamentalsImg,
  angular: angularImg,
  javascript: jsImg
};

export const TrainingProgram = ({ courseName, type }: TrainingProgramProps) => {
  const { course: courseRaw } = useCourseByTitle(courseName, type);

  const course = courseRaw as Course;

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <section className="training-program container">
        <div className="training-program content column-2">
          <div className="left">
            <Title text="Training program" hasAsterisk />
            <Paragraph>
              The program consists of 3 stages. There may be requirements for advancing to each
              higher stage, which will be described below. This specific run of the program will
              take the form of self-study. This means that you will have access to pre-recorded
              webinars, recommended materials, and weekly live Q&A sessions with our
              mentors/coordinators to answer any questions you might have.
            </Paragraph>
            <Paragraph>
              You will also have the ability to communicate with other students and help each other
              solve any problems you might face. We will provide you with a list of topics that
              should be covered for each stage with recommended deadlines, but you will have the
              freedom to choose when you want to watch the lectures and complete the tasks.
            </Paragraph>
            <Paragraph>
              <span>BE AWARE</span> that practical tasks’ deadlines are not suggestions, and should
              be respected.
            </Paragraph>
            <Subtitle text="Attention! Mentors on this course will be first assigned to the graduates of the RS School Stage #2." />
            <Button label="Register" href={course?.detailsUrl} />
          </div>
          <div className="right">
            <img src={imageType[courseName]} alt={courseName} />
          </div>
        </div>
      </section>
    </>
  );
};
