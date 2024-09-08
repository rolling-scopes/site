import { type Course } from '@/app/types';
import { type ListData } from '@/shared/ui/list';

export type DataMap = {
  courses: Course[];
  coursesPath: CoursesPath[];
  javascript: JSPath[];
  javascriptRu: JSPath[];
  angular: AngularAwsPath[];
  awsDev: AngularAwsPath[];
};

export interface JSPath {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  topics?: string[];
  list?: ListData;
  marked?: boolean;
}

export type AngularAwsPath = Pick<JSPath, 'id' | 'title' | 'list'>;

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
  list?: ListData;
}
