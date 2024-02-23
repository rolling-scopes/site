import { type Course } from '@/app/types';

export type DataMap = {
  courses: Course[];
  coursesPath: CoursesPath[];
  javascript: JSPath[];
  angular: AngularAwsPath[];
  awsDev: AngularAwsPath[];
};

export interface JSPath {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  topics?: string[];
  actions?: string[];
}

export interface AngularAwsPath extends Pick<JSPath, 'id' | 'title' | 'actions'> {}

export interface CoursesPath {
  id: number;
  title: string;
  description: string;
  logoIcon: string;
  links: {
    linkTitle: string;
    href: string;
    isActive?: boolean;
  }[];
}
