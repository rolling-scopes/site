import coursesPageHeroImg from '@/shared/assets/mentor-with-his-students.webp';
import welcome from '@/shared/assets/welcome.webp';

export const heroPageData = {
  school: {
    mainTitle: 'RS School',
    widgetTitle: 'Connecting people, growing together, having fun',
    subTitle: ['Free courses. High motivation'],
    imageAltText: '',
  },
  courses: {
    mainTitle: 'Our Courses',
    widgetTitle: 'Journey to full stack mastery',
    subTitle: ['Community driven. 100% free of charge'],
    heroImageSrc: coursesPageHeroImg,
    imageAltText: 'Sloth mascot mentor with his sloths students',
  },
  community: {
    mainTitle: 'The Rolling Scopes',
    widgetTitle: 'Connecting people, growing together, having fun',
    subTitle: ['an international community of developers', 'since 2013'],
    imageAltText: '',
  },
  mentorship: {
    mainTitle: 'Mentorship',
    widgetTitle: '',
    subTitle: ['By teaching others, you learn yourself'],
    imageAltText: '',
  },
  merch: {
    mainTitle: 'Merch',
    widgetTitle: 'Free assets for your design',
    subTitle: [''],
    heroImageSrc: welcome,
    imageAltText: 'A sloth mascot with arms raised under a welcome sign',
  },
};
