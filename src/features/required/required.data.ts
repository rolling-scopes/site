import type { CourseMap } from './required.types';

export const courseDataMap: CourseMap = {
  javascript: {
    knowBefore: {
      title: 'Required before the start',
      description: [
        'Basic knowledge of HTML, CSS, Javascript is highly recommended before starting the course. Basic computer science theory (data structures, algorithms, maths) is recommended before starting the course. Experience with using any IDE. English language level: Intermediate (B1) and up.',
        'Register through this page and join the official discord channel for the training participants.',
      ],
    },
    willLearn: {
      title: 'What to do if you lack base knowledge?',
      description: [
        'In this case, you will have to spend enough time on self-preparation. We recommend:Take a course in Computer Science. Read a good Javascript tutorial. Use the Codewars platform to solve practical tasks. You can start with simpler ones. Take free online courses: Learn the Command Line Learn GitIntro to Computer Science Algorithms.',
        'Believe in your strength!',
      ],
    },
  },
  awsFundamentals: {
    knowBefore: {
      title: 'Required before the start',
      description: [
        'Beginners welcome!',
        'No AWS Cloud experience is necessary.',
        'We will use the AWS Free Tier',
        'No IT prerequisites required',
      ],
    },
    willLearn: {
      title: 'What you will learn',
      description: [
        'Networking Fundamentals',
        'Cloud Technical Fundamentals',
        'AWS Cloud Essentials',
        'Basic AWS Services (EC2, ELB, ASG, RDS, ElastiCache, S3)',
      ],
    },
  },
  awsDev: {
    knowBefore: {
      title: 'Required before the start',
      description: [
        'You should be comfortable with at least one programming language (such as Python, JavaScript, Java, or C#) and have a good understanding of basic web development concepts, including HTML, CSS, and JavaScript.',
        'English language level: Intermediate (B1) and up.',
        'Being able to spend at least 10 hours per week studying.',
      ],
    },
    willLearn: [],
  },
  nodejs: {
    knowBefore: {
      title: 'Required before the start',
      description: ['Solid knowledge of JavaScript, including ES6, is required for this course.'],
    },
    willLearn: [],
  },
  angular: {
    knowBefore: {
      title: 'Required before the start',
      description: [
        'JavaScript',
        'Typescript',
        'Git, GitHub (clone, add, commit, push, pull, merge, rebase, work with Pull Request)',
        'npm, webpackCSS3 / HTML5',
        'Chrome DevTools Figma',
        'Understanding the concept of REST API',
      ],
    },
    willLearn: [],
  },
};
