import type { CourseMap } from './required.types';

export const courseDataMap: CourseMap = {
  javascript: {
    knowBefore: {
      title: 'Required before the start',
      description: [
        'Basic knowledge of HTML, CSS, Javascript is highly recommended before starting the course.',
        'Basic computer science theory (data structures, algorithms, maths) is recommended before starting the course.',
        'Experience with using any IDE.',
        'English language level: Intermediate (B1) and up.',
        'Register through this page and join the official discord channel for the training participants.',
      ],
    },
    willLearn: {
      title: 'What to do if you lack base knowledge?',
      description: [
        'In this case, you will have to spend enough time on self-preparation. We recommend:',
        [
          {
            id: 0,
            text: 'Take a course in ',
            title: 'Computer Science.',
            link: 'https://rkhaslarov.github.io/computer-science-introduction/#introduction',
          },
        ],
        [
          {
            id: 1,
            text: 'Read a good ',
            title: 'Javascript tutorial.',
            link: 'https://javascript.info/',
          },
        ],
        [
          {
            id: 2,
            text: 'Use the ',
            title: 'Codewars platform',
            link: 'https://www.codewars.com/kata/search/javascript',
          },
          {
            id: 3,
            text: ' to solve practical tasks. You can start with ',
            title: 'simpler ones.',
            link: 'https://www.codewars.com/kata/search/javascript?q=&r%5B%5D=-8&beta=false',
          },
        ],
        'Take free online courses:',
        [
          {
            id: 4,
            text: '',
            title: 'Learn the Command Line  ',
            link: 'https://www.codecademy.com/learn/learn-the-command-line',
          },
        ],
        [
          {
            id: 5,
            text: '',
            title: 'Learn Git ',
            link: 'https://www.codecademy.com/learn/learn-git',
          },
        ],
        [
          {
            id: 6,
            text: '',
            title: 'Algorithms. ',
            link: 'https://www.coursera.org/learn/algorithms-part1',
          },
        ],
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
