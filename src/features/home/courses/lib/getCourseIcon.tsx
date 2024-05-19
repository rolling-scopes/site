import { AngularIcon, AwsLogo, HtmlIcon, JavascriptIcon, NodeJsIcon, ReactIcon } from '@/icons';

const icons = {
  'JS / Front-end Pre-school RU': <HtmlIcon />,
  'JS / Front-end EN': <JavascriptIcon />,
  'JS / Front-end RU': <JavascriptIcon />,
  React: <ReactIcon />,
  Angular: <AngularIcon />,
  'Node.js': <NodeJsIcon />,
  'AWS Fundamentals': <AwsLogo />,
  'AWS Cloud Developer': <AwsLogo />,
};

export type IconsTitle = keyof typeof icons;

export const getCourseIcon = (title: IconsTitle) => {
  return Object.keys(icons).includes(title) ? icons[title] : null;
};
