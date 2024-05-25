import { COURSE_TITLES } from '@/data/courseTitles.data';
import { AngularIcon, AwsLogo, HtmlIcon, JavascriptIcon, NodeJsIcon, ReactIcon } from '@/icons';

export const icons = {
  [COURSE_TITLES.JS_PRESCHOOL_RU]: <HtmlIcon />,
  [COURSE_TITLES.JS_EN]: <JavascriptIcon />,
  [COURSE_TITLES.JS_RU]: <JavascriptIcon />,
  [COURSE_TITLES.REACT]: <ReactIcon />,
  [COURSE_TITLES.ANGULAR]: <AngularIcon />,
  [COURSE_TITLES.NODE]: <NodeJsIcon />,
  [COURSE_TITLES.AWS_FUNDAMENTALS]: <AwsLogo />,
  [COURSE_TITLES.AWS_CLOUD_DEVELOPER]: <AwsLogo />,
};

export type IconsTitle = keyof typeof COURSE_TITLES;
